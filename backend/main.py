import os
import sys
import uuid
import datetime

# Ensure backend directory is in python path
CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
if CURRENT_DIR not in sys.path:
    sys.path.insert(0, CURRENT_DIR)

from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
from typing import Optional, List, Dict, Any

try:
    from .storage import load_packages, save_packages, get_package_by_id, add_package, update_package, delete_package
    from .trackers import CARRIERS, guess_carrier, get_official_url, advance_step
    from .notifier import load_settings, save_settings, send_notification
except ImportError:
    from storage import load_packages, save_packages, get_package_by_id, add_package, update_package, delete_package
    from trackers import CARRIERS, guess_carrier, get_official_url, advance_step
    from notifier import load_settings, save_settings, send_notification

app = FastAPI(title="Package Radar API", version="1.0.0")

FRONTEND_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "frontend")

class PackageCreate(BaseModel):
    name: str
    category: Optional[str] = "一般包裹"
    carrier: Optional[str] = "auto"
    tracking_number: str
    estimated_delivery: Optional[str] = ""
    note: Optional[str] = ""

class PackageUpdate(BaseModel):
    name: Optional[str] = None
    category: Optional[str] = None
    carrier: Optional[str] = None
    tracking_number: Optional[str] = None
    status_code: Optional[str] = None
    status_text: Optional[str] = None
    current_step: Optional[int] = None
    estimated_delivery: Optional[str] = None
    location: Optional[str] = None
    note: Optional[str] = None

class SettingsModel(BaseModel):
    telegram_bot_token: Optional[str] = ""
    telegram_chat_id: Optional[str] = ""
    line_token: Optional[str] = ""
    notify_on_step: Optional[bool] = True

@app.get("/api/carriers")
def get_carriers():
    return [{"id": k, "name": v["name"], "category": v["category"], "icon": v["icon"]} for k, v in CARRIERS.items()]

@app.get("/api/packages")
def list_packages():
    packages = load_packages()
    
    # Calculate stats
    stats = {
        "total": len(packages),
        "in_transit": sum(1 for p in packages if p.get("status_code") in ["in_transit", "customs"]),
        "arriving_today": sum(1 for p in packages if p.get("status_code") in ["out_for_delivery", "ready_for_pickup"]),
        "delivered": sum(1 for p in packages if p.get("status_code") == "delivered")
    }
    
    return {
        "stats": stats,
        "packages": packages
    }

@app.post("/api/packages")
def create_package(pkg_in: PackageCreate):
    carrier = pkg_in.carrier
    if not carrier or carrier == "auto" or carrier == "other":
        carrier = guess_carrier(pkg_in.tracking_number)
        
    carrier_info = CARRIERS.get(carrier, CARRIERS["other"])
    carrier_name = carrier_info["name"]
    now_str = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
    
    steps = [
        {"title": "已下單 / 建立單號", "desc": "物流單號已由寄件人建立", "time": now_str, "completed": True},
        {"title": "物流出貨", "desc": "包裹已移交快遞收件或由倉庫發出", "time": now_str, "completed": True},
        {"title": "幹線運輸中", "desc": "包裹正轉運發往目的地站所或海關", "time": "進行中", "completed": False},
        {"title": "派件中 / 抵達門市", "desc": "司機出車派送或已到達取貨超商", "time": "待到達", "completed": False},
        {"title": "順利送達", "desc": "已完成簽收或取貨", "time": "待簽收", "completed": False}
    ]
    
    new_pkg = {
        "id": "pkg-" + str(uuid.uuid4())[:8],
        "name": pkg_in.name,
        "category": pkg_in.category or "日常網購",
        "carrier": carrier,
        "carrier_name": carrier_name,
        "tracking_number": pkg_in.tracking_number.strip(),
        "status_code": "in_transit",
        "status_text": "運送中 (包裹已寄出)",
        "current_step": 2,
        "steps": steps,
        "estimated_delivery": pkg_in.estimated_delivery or "待定",
        "location": "運送站所轉運中",
        "note": pkg_in.note or "",
        "official_url": get_official_url(carrier, pkg_in.tracking_number),
        "updated_at": now_str
    }
    
    saved = add_package(new_pkg)
    send_notification("新增追蹤包裹", f"{new_pkg['name']} ({carrier_name})\n單號: {new_pkg['tracking_number']}")
    return saved

@app.put("/api/packages/{pkg_id}")
def edit_package(pkg_id: str, updates: PackageUpdate):
    pkg = get_package_by_id(pkg_id)
    if not pkg:
        raise HTTPException(status_code=404, detail="Package not found")
        
    update_data = {k: v for k, v in updates.dict().items() if v is not None}
    
    if "carrier" in update_data or "tracking_number" in update_data:
        carrier = update_data.get("carrier", pkg.get("carrier", "other"))
        tn = update_data.get("tracking_number", pkg.get("tracking_number", ""))
        update_data["official_url"] = get_official_url(carrier, tn)
        if carrier in CARRIERS:
            update_data["carrier_name"] = CARRIERS[carrier]["name"]
            
    update_data["updated_at"] = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
    updated = update_package(pkg_id, update_data)
    return updated

@app.delete("/api/packages/{pkg_id}")
def remove_package(pkg_id: str):
    pkg = get_package_by_id(pkg_id)
    name = pkg.get("name") if pkg else pkg_id
    success = delete_package(pkg_id)
    if not success:
        raise HTTPException(status_code=404, detail="Package not found")
    return {"status": "deleted", "id": pkg_id, "name": name}

@app.post("/api/packages/{pkg_id}/refresh")
def refresh_single_package(pkg_id: str):
    pkg = get_package_by_id(pkg_id)
    if not pkg:
        raise HTTPException(status_code=404, detail="Package not found")
        
    now_str = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
    update_package(pkg_id, {"updated_at": now_str})
    return {"status": "refreshed", "package": get_package_by_id(pkg_id)}

@app.post("/api/packages/{pkg_id}/advance")
def advance_package_progress(pkg_id: str):
    pkg = get_package_by_id(pkg_id)
    if not pkg:
        raise HTTPException(status_code=404, detail="Package not found")
        
    updated = advance_step(pkg)
    save_packages(load_packages())
    update_package(pkg_id, updated)
    
    # Send notification for progress change
    send_notification("包裹狀態更新", f"{updated['name']}\n最新進度: {updated['status_text']}")
    return {"status": "advanced", "package": updated}

@app.post("/api/refresh-all")
def refresh_all_packages():
    packages = load_packages()
    now_str = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
    for p in packages:
        p["updated_at"] = now_str
    save_packages(packages)
    return {"status": "all_refreshed", "count": len(packages), "time": now_str}

# Settings & Notifications API
@app.get("/api/settings")
def get_current_settings():
    s = load_settings()
    # Mask tokens slightly for safety
    masked_line = (s.get("line_token", "")[:4] + "..." + s.get("line_token", "")[-4:]) if len(s.get("line_token", "")) > 8 else s.get("line_token", "")
    masked_tg = (s.get("telegram_bot_token", "")[:6] + "...") if len(s.get("telegram_bot_token", "")) > 6 else ""
    return {
        "telegram_chat_id": s.get("telegram_chat_id", ""),
        "has_telegram": bool(s.get("telegram_bot_token") and s.get("telegram_chat_id")),
        "has_line": bool(s.get("line_token")),
        "notify_on_step": s.get("notify_on_step", True)
    }

@app.post("/api/settings")
def update_current_settings(data: SettingsModel):
    current = load_settings()
    if data.telegram_bot_token:
        current["telegram_bot_token"] = data.telegram_bot_token.strip()
    if data.telegram_chat_id:
        current["telegram_chat_id"] = data.telegram_chat_id.strip()
    if data.line_token:
        current["line_token"] = data.line_token.strip()
    if data.notify_on_step is not None:
        current["notify_on_step"] = data.notify_on_step
    save_settings(current)
    return {"status": "saved"}

@app.post("/api/notify-test")
def test_notification():
    res = send_notification("測試推播通知", "這是一則來自 Package Radar 雲端包裹雷達的測試訊息！通訊管道設定成功！")
    return {"status": "sent", "channels": res}

if os.path.exists(FRONTEND_DIR):
    app.mount("/static", StaticFiles(directory=FRONTEND_DIR), name="static")

@app.get("/")
def serve_index():
    index_file = os.path.join(FRONTEND_DIR, "index.html")
    if os.path.exists(index_file):
        return FileResponse(index_file)
    return {"message": "Frontend index.html not found"}
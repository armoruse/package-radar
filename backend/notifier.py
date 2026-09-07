import requests
import json
import os
from typing import Dict, Any

SETTINGS_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), "data", "settings.json")

def load_settings() -> Dict[str, Any]:
    if not os.path.exists(SETTINGS_PATH):
        return {
            "telegram_bot_token": "",
            "telegram_chat_id": "",
            "line_token": "",
            "notify_on_step": True
        }
    try:
        with open(SETTINGS_PATH, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return {}

def save_settings(data: Dict[str, Any]) -> bool:
    try:
        os.makedirs(os.path.dirname(SETTINGS_PATH), exist_ok=True)
        with open(SETTINGS_PATH, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        return True
    except Exception as e:
        print(f"Error saving settings: {e}")
        return False

def send_notification(title: str, body: str) -> Dict[str, Any]:
    settings = load_settings()
    results = {"telegram": "skipped", "line": "skipped"}
    msg = f"📦【Package Radar 包裹通知】\n\n【{title}】\n{body}"

    # Telegram
    tg_token = settings.get("telegram_bot_token", "").strip()
    tg_chat = settings.get("telegram_chat_id", "").strip()
    if tg_token and tg_chat:
        try:
            url = f"https://api.telegram.org/bot{tg_token}/sendMessage"
            resp = requests.post(url, json={"chat_id": tg_chat, "text": msg}, timeout=5)
            results["telegram"] = "success" if resp.status_code == 200 else f"failed: {resp.text}"
        except Exception as e:
            results["telegram"] = f"error: {e}"

    # LINE Notify
    line_token = settings.get("line_token", "").strip()
    if line_token:
        try:
            url = "https://notify-api.line.me/api/notify"
            headers = {"Authorization": f"Bearer {line_token}"}
            resp = requests.post(url, headers=headers, data={"message": msg}, timeout=5)
            results["line"] = "success" if resp.status_code == 200 else f"failed: {resp.text}"
        except Exception as e:
            results["line"] = f"error: {e}"

    return results

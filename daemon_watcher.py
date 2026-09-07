import time
import os
import subprocess
from datetime import datetime

base_dir = r"C:\Users\armochen\.gemini\antigravity\scratch\package-radar"
script = os.path.join(base_dir, "auto_sync_service.py")
py_exe = r"C:\Users\armochen\.gemini\antigravity\scratch\gmail_organizer\venv\Scripts\python.exe"

print(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] 啟動 Gmail 包裹自動巡檢守護進程...")
print("每 15 分鐘將自動連線 Gmail，偵測 Apple、好市多、蝦皮、酷澎之最新出貨/到貨通知！")

while True:
    try:
        subprocess.run([py_exe, script], cwd=base_dir)
    except Exception as e:
        print(f"巡檢異常: {e}")
    # Sleep 15 minutes (900 seconds)
    time.sleep(900)

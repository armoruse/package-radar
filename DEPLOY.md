# 🚀 Package Radar 雲端一鍵部署指南 (3分鐘快速上線)

本專案已完成雲端容器化配置（包含 `Dockerfile`、`Procfile`、`zbpack.json` 與 `requirements.txt`），可直接免費部屬到主流雲端平台，讓你在手機、電腦上 24 小時隨時隨地查看包裹進度！

---

## 方案 A：部署到 Zeabur (🥇 最推薦：台灣團隊、全繁中介面、有免費方案)

Zeabur 伺服器離台灣最近（可選東京、新加坡或香港），操作介面最直覺友善。

### 步驟：
1. **建立 GitHub 倉庫**：
   - 到 [GitHub.com](https://github.com) 點右上角 `+` ➔ `New repository`。
   - 名稱填寫 `package-radar`，設定為 `Private`（私人）或 `Public`（公開）皆可。
   - 將本機 `package-radar` 資料夾的程式碼推送到 GitHub：
     ```bash
     cd C:\Users\armochen\.gemini\antigravity\scratch\package-radar
     git init
     git add .
     git commit -m "Initial commit of Package Radar"
     git branch -M main
     git remote add origin https://github.com/<你的GitHub帳號>/package-radar.git
     git push -u origin main
     ```
2. **登入 Zeabur 部署**：
   - 前往 [Zeabur 官網 (zeabur.com)](https://zeabur.com/)，點擊「使用 GitHub 登入」。
   - 點擊「建立新專案 (Create Project)」，地區可選「亞洲 / 東京 (Tokyo)」。
   - 點擊「部署新服務」 ➔ 選擇「Git 倉庫」 ➔ 挑選剛才建立的 `package-radar`。
   - Zeabur 會自動辨識 Python/Dockerfile 並在 1 分鐘內完成部署！
3. **取得專屬公開網址**：
   - 在服務面板點擊「網域名稱 (Networking)」 ➔ 點「產生免費網域 (Generate Domain)」。
   - 你會得到一個類似 `https://package-radar-xxxx.zeabur.app` 的專屬網址。
   - 用手機 Safari 或 Chrome 開啟該網址，點「加入主畫面」，就能像 App 一樣隨時監控！

---

## 方案 B：部署到 Render (🥈 全球主流免費雲端託管)

Render 提供每個月免費的 Web Service。

### 步驟：
1. 註冊並登入 [Render (render.com)](https://render.com/)。
2. 點擊右上角 `New +` ➔ 選擇 `Web Service`。
3. 連結你的 GitHub 帳號，選擇 `package-radar` 倉庫。
4. 設定選項：
   - **Name**: `my-package-radar`
   - **Language**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn backend.main:app --host 0.0.0.0 --port $PORT`
   - **Instance Type**: 選擇 `Free`
5. 點擊 `Create Web Service`，約 2 分鐘後即可取得 `https://my-package-radar.onrender.com` 網址。

---

## 方案 C：使用 Docker 在自備 VPS 上線

如果你有自己的雲端主機（GCP、AWS、DigitalOcean 等）：
```bash
# 建置映像檔
docker build -t package-radar .

# 啟動容器 (背景常駐在 8000 連接埠)
docker run -d --name package-radar -p 8000:8000 --restart always package-radar
```

---

## 🔔 設定手機 LINE Notify / Telegram 即時推播

部署完成後，打開你的專屬網址：
1. 點擊右上角「**LINE / TG 推播**」按鈕。
2. 輸入你的 **LINE Notify Token**（至 [notify-bot.line.me](https://notify-bot.line.me/) 登入即可免費領取）或 Telegram Bot 資訊。
3. 點擊「**發送測試推播**」，手機收到確認訊息即代表串接成功！
4. 當包裹進入「派送中」或「抵達門市待取件」時，雲端將主動發訊敲你的手機！

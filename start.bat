@echo off
title Package Radar - ??????
echo ========================================================
echo   Starting Package Radar (?????? ????)
echo   ??: http://localhost:8000
echo ========================================================
start "" http://localhost:8000
python -m uvicorn backend.main:app --host 0.0.0.0 --port 8000 --reload
pause

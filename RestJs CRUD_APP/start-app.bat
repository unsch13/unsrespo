@echo off
echo Starting Product Management App...
echo.
echo Server will start on http://localhost:8082
echo Press Ctrl+C to stop the server
echo.
start http://localhost:8082
node server-test.js
pause

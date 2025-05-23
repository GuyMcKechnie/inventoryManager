@echo off
echo Starting frontend development server...
start cmd /k "cd client && npm run dev"

echo Starting backend Java application...
start cmd /k "cd server && mvn spring-boot:run"

echo Application startup initiated. Check the new command windows for output.
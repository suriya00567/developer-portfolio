git add .
git commit -m "Update design to modern futuristic neon theme and add custom logo"
git push origin master
call npm run build
call npx gh-pages -d build

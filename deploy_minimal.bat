git add .
git commit -m "Completely rewrite UI to match minimal purple dark theme with timeline"
git push origin master
call npm run build
call npx gh-pages -d build

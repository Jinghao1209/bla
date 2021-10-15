# git add *
# git commit -m "undate clicktime div id and center clicktime div"
# git branch -M main
# git remote add origin https://github.com/Jinghao1209/bla.git
# git push -u origin main
git checkout --orphan latest_branch
git add -A
git commit -am "add all and update all..."
git branch -D main
git branch -m main
git push -f origin main
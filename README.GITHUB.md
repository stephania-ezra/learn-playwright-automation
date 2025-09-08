## 1. Set up local repo
Follow this page [Github docs](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github#initializing-a-git-repository)
- git init -b main
- git add .
- git commit -m "First commit"

## 2. Create repo in Github
- repo_name
    - playwrightAutomationVSCodeExt
- no readme 
- no license
- no .gitignore
- Do you want to create new local repo or push existing local repo -> choose push existing


## 3. Push local project to Github repo
- git remote add origin https://github.com/stephania-ezra/playwrightAutomationVSCodeExt.git
- git branch -M main
- git push -u origin main


## 4. Push local changes to Github repo
- git status
- git add filename
- git commit -m "removing testonly"
- git push origin main
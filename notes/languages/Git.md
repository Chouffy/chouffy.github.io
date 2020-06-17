---
parent - Languages
---

# Git

*Commit* - snapshot

## Setup

`git init` - initialize dir with git  

## Staging Area

`git add <file> <file>` - add file to index  
`git add .` - add all files  
`git status` - list modifications  
`git rm file.txt` - remove a file  

## Commit

`git commit -m "message"` - commit  
`git log` - See all commit  
`git checkout master` or `<commit-hash>` - Go back to the latest or specified commit  
`git reset HEAD -- <file or folder>` - Remove a file/folder from staging area  

## Branching

`git branch` - list all branch  
`git branch <new-branch-name>` - create new branch  
`git checkout <branch-name>` or `master` - switch to branch-name / master  
`git merge <branch-name>` - merge branch-name into current branch  
`git branch -d <branch-name>` - delete a branch  

## Repo

### Connection

`git remote add REPO https -//URL` - add remote repo  
`git remote remove REPO` - remove repo  
`git remote -v` - check connected git  

### Operations

`git clone` - copy latest repo from remote  
`git push` - push to remote  
`git pull` - pull latest from remote  

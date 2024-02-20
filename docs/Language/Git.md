Is a Distributed version control system used in [[Software]] development

*Commit* - snapshot
[A good example of a standard fork/change/PR workflow](https://gist.github.com/Chaser324/ce0505fbed06b947d962)
## Setup
`git init` - initialize directory with git  
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
### Sign-off
Some projects require a sign-off, which add `Signed-off-by: NAME <MAIL@EXAMPLE.COM>` in the comment.
## Branching
`git branch` - list all branch  
`git branch <new-branch-name>` - create new branch  
`git checkout <branch-name>` or `master` - switch to branch-name / master  
`git merge <branch-name>` - merge branch-name into current branch  
`git branch -d <branch-name>` - delete a branch  
## Repo
### Connection
`git remote add REPO https://URL` - add remote repo  
`git remote remove REPO` - remove repo  
`git remote -v` - check connected git  
### Operations
`git clone` - copy the latest repo from remote  
`git push` - push to remote  
`git pull` - pull latest from remote  
### `.gitignore`
Is a file to manage what should be in git and what not
```gitignore
# Ignore few files and folder
.trash/
.DS_Store
.gitignore

# Ignore everything
*

# But not the pub folder and up to 2th subfolder level
!pub/
!pub/*
!pub/*/
!pub/*/*
```
### Partial sync - Sparse checkout
- Download only a part of a repository - [Source](https://stackoverflow.com/questions/600079/how-do-i-clone-a-subdirectory-only-of-a-git-repository)
	```sh
	# Clone the repo without content
	git clone -n --depth=1 --filter=tree:0 https://github.com/cirosantilli/test-git-partial-clone-big-small-no-bigtree 
	cd test-git-partial-clone-big-small-no-bigtree
	# Select two dirs to keep: small and small2
	git sparse-checkout set --no-cone small small2
	# Download everything
	git checkout
	```
- Ignore changes tracking on existing file like `.gitignore` ([source](https://stackoverflow.com/a/4949978)): `git update-index --assume-unchanged .gitignore`
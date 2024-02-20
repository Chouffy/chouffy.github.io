---
aliases: Visudo
---
Is a [[Software]] for [[Linux]] and other [[Unix]] system to runs elevated commands
## Setup
- Edit the permission file: `sudo visudo`
- Add a user to the sudo group: `usermod -a -G sudo $USER`
## Usage
- Use as one user `sudo -u USER command`
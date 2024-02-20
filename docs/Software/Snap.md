Is a [[Software]] packaging & deployment system used on [[Linux]] systems, most particularly [[Ubuntu Server]].
## Concept
- Bundle application & all dependencies
- App are executed encapsulated
- Automatically updated
## Setup
On [[Debian]], just install:
```sh
sudo apt update
sudo apt install snapd
sudo snap install core
```
## Usage
### Commands
- `snap list`
- `snap install APP`
- `snap remove APP`
- `snap logs APP`
- `snap info APP` to list all version of one app
- `sudo snap revert APP` to go one version before
- `sudo snap refresh APP` to install latest version
	- `--channel=1.2/stable` to install specific version
### Services
- `snap services`
- `snap logs APP.SERVICE`
- `snap stop --disable APP.SERVICE` or `systemctl status snap.APP.SERVICE`
### Configuration
- `snap get APP` and `snap get APP key1` to go to level key1
- `snap set APP key1.subkey1=value`
### Volumes created
- `/snap/`: mount point for running snap
	- `core/`: virtualFS for snap apps
	- `bin/`: contain executables
- `/var/snap/`: user data & logs
- `/var/lib/snapd/`
	- `snaps/`: contain \*.snaps
- `/home/username/snap/`
## Source
- [Managing Ubuntu Snaps - FreeCodeCamps](https://www.freecodecamp.org/news/managing-ubuntu-snaps/)

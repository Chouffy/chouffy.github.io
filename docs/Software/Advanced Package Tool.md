---
aliases: apt
---
Is a [[Software]] to install, update, remove packages on [[Operating System]] like [[Debian]] or [[Ubuntu]]
## Notes
- `apt update` to update the list of package
- `apt install` to upgrade package to their next updates
	- `apt dist-upgrade` to upgrade package & manage dependencies accordingly (better)
- `apt install PACKAGE` to install packages from the web
	- `apt install -f /path/to/file.deb` to install from local file
- `apt clean` to remove cache
- `apt autopurge` to purge unneeded packages

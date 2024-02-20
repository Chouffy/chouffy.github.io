Is a [[synchronization]] [[Software]] that can run on many [[Operating System]].
It can be used for [[Backup]], however there's no versioning of files.

Links:
- [Project home page](https://rclone.org/)
- [GitHub page](https://github.com/rclone/rclone)
	- [Releases](https://github.com/rclone/rclone/releases)
- [Official documentation](https://rclone.org/docs/)
	- [Environment variables](https://rclone.org/docs/#environment-variables)
## Notes
- Works with layers
- Storage layer
	- https://rclone.org/onedrive/
	- https://rclone.org/swift/
- Encryption layer: [crypt](https://rclone.org/crypt/)
	- Configuration file holds the secrets
	- Password is enough to recreate config
	- If salt is defined, must be considered as password as well
	- Check section on file name encryption 
		- Onedrive `base32768`
- Configuration file can be held in various directories
	- Usually in `%APPDATA%/rclone/rclone.conf` or `~/.config/rclone/rclone.conf`
	- [See doc](https://rclone.org/docs/#config-config-file)
## Setup
- [OneDrive](https://rclone.org/onedrive/)
### Renew token
1. Start from a fresh `rclone` session
2. Create a new connection with `rclone config`
3. Copy the token
	1. Put `"` around it
	2. Make sure to prefix `"` with \`` 

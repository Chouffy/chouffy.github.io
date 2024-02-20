Is a [[Linux]] security [[Software]] to mandate access control
## Usage
- `aa-status` to view loaded profiles
### Profile management
- Config is in `/etc/apparmor.d/`
- `apparmor_parser -r /etc/apparmor.d/profile.name` to reload a profile
	- `systemctl reload apparmor.service` to reload all profiles
### Investigate
- `cat /var/log/kern.log` to check kernel messages, where AppArmor can post things
## Reference
- [Security - AppArmor - Ubuntu](https://ubuntu.com/server/docs/security-apparmor)
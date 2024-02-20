---
aliases: Linux Services, systemctl
---
Is a [[Linux]] [[Software]] to manage services on a machine.
## Usage
- Configuration stored in `/etc/systemd/`
### Commands
- `systemctl status test.service`
- `systemctl list-dependencies test.service`
- Start & stop
	- `systemctl stop test.service`
	- `systemctl start test.service`
	- `systemctl restart test.service`
	- `systemctl reload test.service` to reload config file
- Disable a service from start at boot
	- `systemctl enable test.service`
	- `systemctl disable test.service`
- Disable a service from automated or manual start
	- `systemctl mask test.service` 
	- `systemctl unmask test.service`

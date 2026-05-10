Is a [[Linux]] [[Software]] for [[Debian]] or [[Ubuntu Server]] (at least) and helps to keep the system up-to-date.
## Setup
[Source](https://www.digitalocean.com/community/tutorials/how-to-keep-ubuntu-20-04-servers-updated#step-2-configuring-unattended-upgrades)
- `apt install unattended-upgrades` to install
- `dpkg-reconfigure unattended-upgrades` to configure
- `systemctl status unattended-upgrades.service` to check if it's running
- Edit `/etc/apt/apt.conf.d/50unattended-upgrades` to your liking
	- `    "${distro_id}:${distro_codename}-updates";` de-comment to have all updates applied automatically
- `systemctl reload unattended-upgrades.service` to apply changes


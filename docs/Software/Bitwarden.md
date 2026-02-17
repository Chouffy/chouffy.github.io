---
aliases:
  - Vaultwarden
---
Is a [[Software]] [[password manager]], alternative to [[KeePass]]
## Server Setup
### Official server
- [GitHub](https://github.com/bitwarden/server)
- However, it is difficult to setup and require to run a script on the host
### Alternative server: Vaultwarden
- [GitHub](https://github.com/dani-garcia/vaultwarden)
- [Installation with Docker Compose](https://github.com/dani-garcia/vaultwarden/wiki/Using-Docker-Compose)
	- [SMTP Configuration](https://github.com/dani-garcia/vaultwarden/wiki/SMTP-Configuration)
	- Notification setup
- [[Fail2Ban]]: see [Vaultwarden Wiki](https://github.com/dani-garcia/vaultwarden/wiki/Fail2Ban-Setup), configure [logging](https://github.com/dani-garcia/vaultwarden/wiki/Logging#changing-the-log-level) first
	- If you use [[Cloudflare]], set your Client IP header to `CF-Connecting-IP` in admin panel -> advanced settings -> Client IP header
	- Don't forget to block `/admin` too
## Client Setup
- Autofill isn't supported, see [forum thread](https://community.bitwarden.com/t/auto-type-autofill-for-logging-into-other-desktop-apps/158)
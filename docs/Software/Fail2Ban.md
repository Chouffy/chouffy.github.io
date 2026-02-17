Is a [[Software]] to ban IPs based on behaviors, such as denied logging guessed from logs.
## Usage
### Directories
- `jail.d`: which log file to monitor and when as well as how long a threat actor should be banned
- `filter.d`: which log entries are relevant for Fail2ban to monitor and act on
- `action.d`: what to do 
### Command-line
- `fail2ban-client set <JAILNAME> unbanip XX.XX.XX.XX` to unban an IP
### Within [[Docker]] to update [[Cloudflare]]
- [This repo](https://github.com/crazy-max/docker-fail2ban) offers a container version
- [This blog post](https://kovasky.me/blogs/cloudflare_fail2ban/) highlight how to update a Cloudflare List from Fail2Ban
	- Then use this list in a *Custom Rule* in Domain → Security → Security Rules
- See [my repo for an example](https://github.com/Chouffy/docker_fail2ban_to_cloudflare/tree/main) with [[Bitwarden|Vaultwarden]]
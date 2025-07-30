This is a [[docs/How-To/index|How-To]] use [[Caddy]] to serve [[Docker]] apps hosted on [[TrueNAS]]
## Why
- Each TrueNAS Apps lives in its own stack, hence cannot communicate to each other
	- The internal [[Docker]] DNS magic doesn't work
	- This blocks [[Caddy]] to access other containers web servers
## How
- In TrueNAS
	- In Network, create a new network interface with an un-routable alias, like `172.172.172.1/24`
	- In Apps, expose ports of each apps to be accessible from Caddy, like `172.172.172.1:30001`
- In the `Caddyfile` of [[Caddy]]
	- Use the exposed IP & port
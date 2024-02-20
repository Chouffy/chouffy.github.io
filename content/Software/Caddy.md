Is a [[web]] server [[Software]]
## Setup
- [Docker image](https://registry.hub.docker.com/_/caddy)
- [Caddyfile explanation](https://caddyserver.com/docs/caddyfile-tutorial)
- Fix UDP Buffer Size error for QUIC connections: 
	- `sysctl -w net.core.rmem_max=2500000` 
	- `sysctl -w net.core.wmem_max=2500000`
## Usage
- `caddy reload` to reload configuration
	- In `/etc/caddy` in the [[Docker]] image
	- Reload in place with [[Docker]]: `docker exec caddy caddy reload -c /etc/caddy/Caddyfile`
## Caddyfile
### Overall structure
```json
web.site.net {
    respond "Hello, world!"
}
```
### Commands
- Return a fixed value: `respond "Hello, world!"`
- Do some reverse proxying: `reverse_proxy hostname:8080`
- Use a custom certificate: `tls cert.pem key.pem` - [source](https://caddyserver.com/docs/caddyfile/directives/tls#examples)
- Define a basic authentication: see [documentation on basicauth](https://caddyserver.com/docs/caddyfile/directives/basicauth)
	- Hash password with `caddy hash-password -p <password>`
	- With [[Docker]], see ![[Docker#^ad959b]]
- Define a path within a site: use [handle](https://caddyserver.com/docs/caddyfile/directives/handle) and `handle_path` (remove the path) within a configuration
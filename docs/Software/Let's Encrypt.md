Is a [[Web]] [[Software]] providing [[SSL]] certificates
## Setup
### [[Docker]] with [[Cloudflare]]
- Use the [certbot](https://hub.docker.com/r/certbot/dns-cloudflare) image
- See the [usage instruction](https://eff-certbot.readthedocs.io/en/stable/install.html#alternative-1-docker)
### [[Alpine Linux]] with CLI
- Install `apk add --upgrade python3 py3-pip certbot`
- Install `pip install certbot-dns-cloudflare`
- Check installed plugins `certbot plugins`
## Usage
- The `/live/` directory only contains links to the `/archive/` one
- `cert.pem` contains only the final certificate, not the chain
	- use `fullchain.pem` instead
- `privkey.pem` contains the private key
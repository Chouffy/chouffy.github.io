---
aliases:
  - Logitech Media Server
---
Is a [[Software]] originally made by [[Logitech]] to run a [[Music]] server and serve them to devices.
## Setup
- [Docker image](https://registry.hub.docker.com/r/lmscommunity/logitechmediaserver/#!)
## Plugins
- `Material Skin` for a better theme
- [Spotty](https://github.com/michaelherger/Spotty-Plugin) to have [[Spotify]] integration
	- Must run network on `host` for proper [[Spotify]]
	- `5353` port must be made available for [[mDNS]]
	- A wide range is necessary for auto discover to works, like `sudo ufw allow from 192.168.0.0/24 to any port 30000:50000 proto tcp`
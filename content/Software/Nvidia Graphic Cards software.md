---
aliases:
  - nvidia-smi
---
Are [[Software]] useful to control [[graphic card]] made by [[Nvidia]]
## Usage on [[Linux]] [[Debian]]
### Installation
See the [Wiki page](https://wiki.debian.org/NvidiaGraphicsDrivers) or do the following:
```sh
apt install software-properties-common
add-apt-repository contrib non-free
apt install nvidia-smi # A reboot + (re) install could be required
```
## Interaction
- Without an X server installed, `nvidia-settings` won't work
	- Maybe with [this workaround](https://unix.stackexchange.com/a/367585)

---
parent: Softwares
---

# Raspberry Pi OS

## Standard configuration

### Setup

1. Download image [here](https://www.raspberrypi.org/downloads/raspberry-pi-os/)
1. Enable SSH by placing a `ssh` file in the boot partition
1. Login with user `pi` and password `raspberry`
1. Change password with `passwd`
1. Config with `sudo raspi-config`

Check also common Linux setup in the Linux page!

### Manage IP address / DHCP

1. Edit `sudo nano /etc/dhcpcd.conf`
1. At the bottom, uncomment and change `interface eth0` and following
1. If you want to use Cloudflare DNS: `static domain_name_servers=1.1.1.1 1.0.0.1 2606:4700:4700::1111 2606:4700:4700::1001`

## Docker & Portainer

### Setup

1. Download `docker` install script `curl -sSL https://get.docker.com >> docker.sh`
1. Run the script `sh ./docker.sh`
1. Add `pi` user to `docker` group `sudo usermod -aG docker pi`
1. Install Portainer for ARM `sudo docker pull portainer/portainer:linux-arm`
1. Create a container that will contain Portainer `sudo docker run --restart always -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer:linux-arm`
1. Go to `https://[RASPBERRY_PI_IP_ADDRESS]:9000` and enjoy!

[Source](https://www.wundertech.net/portainer-raspberry-pi-install-how-to-install-docker-and-portainer/)
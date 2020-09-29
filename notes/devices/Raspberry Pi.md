---
parent: Devices
---

# Raspberry Pi

## Install Pi-Hole on a Raspberry Pi

1. [Raspberry Pi OS Lite](https://www.raspberrypi.org/downloads/raspbian/)
1. Put a `ssh` empty file in the `boot` drive in order to activate SSH on 1st boot (headleess config)
1. Changed password of `pi` user: `sudo passwd pi`
1. Changed timezone + GPU RAM size in `raspi-config`
1. [Installed Pi-Hole](https://github.com/pi-hole/pi-hole/#method-2-manually-download-the-installer-and-run)
1. [Installed ufw](https://www.raspberrypi.org/documentation/configuration/security.md)
1. [Installed log2ram](https://github.com/azlux/log2ram) to prevent SD card wearing.
1. [Activated Pi-Hole DHCP server](https://discourse.pi-hole.net/t/how-do-i-use-pi-holes-built-in-dhcp-server-and-why-would-i-want-to/3026)

## USB WLAN / Wifi network interface

 The `EW-7811Un 802.11n Wireless Adapter` is a `Realtek RTL8188CUS`.
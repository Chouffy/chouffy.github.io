---
parent: Softwares
---

# Linux

## Setup

### Install Firewall

* Install `sudo apt install ufw`
* Configuration
    * Check status & list configuration `sudo ufw status`
    * Allow a port `sudo ufw allow PORT`
    * Rate limit a port (>6 connections within 30 sec) `sudo ufw limit PORT`
* Verify
    * Check added rules `sudo ufw show added`
* Enable `sudo ufw enable`

### Power Management

* On a lapptop: disable standby on lid close: in `/etc/systemd/logind.conf`, uncomment and change `HandleLidSwitch=ignore`

## Maintenance

* Update packages `sudo apt update && sudo apt upgrade`
* Check free disk space `df -h`

## Recover

### Bootloader

Try [Super Grub2 Disk](https://www.supergrubdisk.org/)

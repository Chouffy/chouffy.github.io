---
parent: Server Softwares
last_modified_date: 2020-11-14
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

## Usability

### *Screen* Terminal Multiplexer

[Complete guide here](https://www.howtogeek.com/662422/how-to-use-linuxs-screen-command/)

* Start `screen`
* List sessions ID `screen -ls`
* In a session:
    * Detach `CTRL+A d`
    * Reattach `screen -r session_ID`

## Maintenance

* Update packages `sudo apt update && sudo apt upgrade`
* Check free disk space `df -h`
* Check system stats
    * `htop` for processes
    * `nmon` for the whole system

## Recover

### Check logs

* System messages: `cat /var/log/messages | tail -n 50`

### Bootloader

Try [Super Grub2 Disk](https://www.supergrubdisk.org/)

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

* On a laptop: disable standby on lid close: in `/etc/systemd/logind.conf`, uncomment and change `HandleLidSwitch=ignore`

### Format & mount a USB stick

1. `ls /mnt` check where the usb stick is mounted
1. `sudo fdisk /dev/sda` if the usb stick is on `sda`
    1. `p` to list existing partition
    1. `g` to create a new GPT partition table or `o` for a DOS partition table
    1. `n` to create a new partition
    1. `w` write to disk and exit
1. `sudo mkfs.ext4 /dev/sda1` to create a ext4 partition or `sudo mkfs -t vfat -I /dev/sda1` for vfat/fat32
1. `sudo mkdir -p /mnt/usbdrive` to create a directory that will host the partition
    * Choose `/mnt` for temporary mounts
    * Choose `/media` for automatics mounts
1. `sudo mount /dev/sda1 /mnt/usbdrive -o umask=000` to mount the usb key
1. `sudo umount /dev/sda1` to unmount

### Tips & Tricks

* `id $user` to get user PUID & GUID
* `ndcu` to tree files & folder, and explore space taken

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

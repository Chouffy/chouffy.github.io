---
parent: Server Softwares
last_modified_date: 2020-11-14
---

# Raspberry Pi OS

## Standard configuration

### Setup

1. Download image [here](https://www.raspberrypi.org/downloads/raspberry-pi-os/)
1. Enable SSH by placing a `ssh` file in the boot partition
1. Login with user `pi` and password `raspberry`
1. Change user password with `passwd` and root password with `sudo passwd`
1. Config with `sudo raspi-config`

Check also common Linux setup in the Linux page!

### Manage IP address / DHCP

1. Edit `sudo nano /etc/dhcpcd.conf`
1. At the bottom, uncomment and change `interface eth0` and following
1. If you want to use Cloudflare DNS: `static domain_name_servers=1.1.1.1 1.0.0.1 2606:4700:4700::1111 2606:4700:4700::1001`

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

## Docker

### Setup

1. Download `docker` install script `curl -sSL https://get.docker.com >> docker.sh`
1. Run the script `sh ./docker.sh`
1. Add `pi` user to `docker` group `sudo usermod -aG docker pi`
1. Log-out and log-in

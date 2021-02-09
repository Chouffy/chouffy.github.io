---
parent: Server Softwares
---

# Linux
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Setup

* On a laptop: disable standby on lid close: in `/etc/systemd/logind.conf`, uncomment and change `HandleLidSwitch=ignore`

### Install Firewall

* Install `sudo apt install ufw`
* Configuration
    * Check status & list configuration `sudo ufw status`
    * Allow a port `sudo ufw allow PORT`
    * Remove an allowance `sudo ufw remove PORT`
    * Rate limit a port (>6 connections within 30 sec) `sudo ufw limit PORT`
    * Enable `sudo ufw enable`
* Verify
    * Check added rules `sudo ufw show added`
    * Check existing rules with numbers `sudo ufw status numbered`
* Enable `sudo ufw enable`

### Install FTP server

1. `sudo apt install vsftpd`
1. `sudo nano /etc/vsftpd.conf` to edit configuration
1. `sudo ufw allow 21`
1. `sudo systemctl restart vsftpd`

### Cron - Job scheduler

* Edit cron of an user `sudo crontab -u USER -e`
* Check if the cron expression is correct: [crontab guru](https://crontab.guru/)

## Tips & Tricks

* Date & Time
    * `timedatectl` to check
    * `sudo timedatectl set-timezone TZ`

### Command-line kung-fu

* `less` to redirect output to a pager
* `watch` to _watch_ regularly an output
* `| grep x` to pipe to grep which is going to select lines with `x`
* `id $user` to get user PUID & GUID

#### *Screen* Terminal Multiplexer

[Complete guide here](https://www.howtogeek.com/662422/how-to-use-linuxs-screen-command/)

* Start `screen`
* List sessions ID `screen -ls`
* In a session:
    * Detach `CTRL+A d`
    * Rename `CTRL+A :sessionname  <Your_session_name>`
* Reattach `screen -r session_ID`

### CPU & Processes

* Check system stats
    * `htop` for processes
    * `nmon` for the whole system
* Health
    * Check CPU frequency `cat /proc/cpuinfo`

### Disk & Data

* Check free disk space `df -h`
* Tree file & folder with space taken `ncdu`
* Check for partition corruption `fsck /dev/sdaXX00`
* Stop a disk
    1. Unmount `sudo umount /dev/sdXX`
    1. Spin down `sudo hdparm -Y /dev/sdXX`
* Erase a disk `sudo dd if=/dev/urandom of=/dev/sdXX bs=10M` - [Source](https://www.addictivetips.com/ubuntu-linux-tips/ways-to-securely-erase-a-hard-drive-on-linux/)

#### View SMART disk data

[Source](https://www.thomas-krenn.com/en/wiki/SMART_tests_with_smartctl)

1. Install `smartmontools`
1. View SMART data & status `sudo smartctl -i /dev/sdXX`
1. Find estimate  & current SMART test `sudo smartctl -c /dev/sdXX`
1. Launch a test: `sudo smartctl -t short /dev/sdXX`
    * Possible options instead of `short`:
    * `long`
    * `conveyance` (after transport) for ATA disks
    * If the HDD go to sleep (especially true for USB ones), try the following:

        ```bash
        while true; do
            dd if=/dev/sdXX iflag=direct count=1 of=/dev/null
            sleep 60
        done
        ```

1. Read the result `sudo smartctl -l selftest /dev/sdXX`

#### Test read/write speed

[Source](https://www.shellhacks.com/disk-speed-test-read-write-hdd-ssd-perfomance-linux/)

1. `sync; dd if=/dev/zero of=tempfile bs=1M count=256; sync`: write to *tempfile* 256 Mb
1. `sudo /sbin/sysctl -w vm.drop_caches=3`: clear the cache
1. `dd if=tempfile of=/dev/null bs=1M count=256`: read *tempfile*

#### Format & mount a USB stick

1. Several options to see devices
    * `sudo blkid` to locate block devices
    * `sudo lsblk` to list mounted block devices
    * `ls /dev` to check where the usb stick is mounted
1. `sudo fdisk /dev/sda` if the usb stick is on `sda`
    1. `p` to list existing partition
    1. `g` to create a new GPT partition table or `o` for a DOS partition table
    1. `n` to create a new partition
    1. `w` write to disk and exit
1. `sudo mkfs.ext4 /dev/sda1` to create a ext4 partition
1. `sudo mkdir /media/usbdrive` to create a directory that will host the partition
    * Choose `/mnt` for temporary mounts
    * Choose `/media` for automatics mounts
1. `sudo mount /dev/sda1 /media/usbdrive -o umask=000` to mount the usb key with all user access
1. `sudo umount /dev/sda1` to unmount
1. If you want to make it permanent
    * Edit `sudo nano /etc/fstab`
    * Add a line `/dev/sda1       /media/usbdrive           ext4    defaults        0       0 `
    * [(Check how fstab works here)](https://www.howtogeek.com/howto/38125/htg-explains-what-is-the-linux-fstab-and-how-does-it-work/)

### Power & Battery

* Check system temperature
    1. `sudo apt install lm-sensors`
    1. `sudo apt-get install lm-sensors`
    1. `sudo /etc/init.d/kmod start`
    1. `sensors`
* Check status & stats about battery
    1. List paths `upower -e`
    1. Get status `upower -i <path>`

## Recover

### Check logs

* System messages: `cat /var/log/messages | tail -n 50`

### Bootloader

Try [Super Grub2 Disk](https://www.supergrubdisk.org/)

### Services with systemctl

* `sudo systemctl status SERVICE`
* Service management
    * `sudo systemctl restart SERVICE`
    * `sudo systemctl start SERVICE`
    * `sudo systemctl stop SERVICE`
    * `sudo systemctl kill SERVICE`
* Service enable/disable
    * `sudo systemctl enable SERVICE`
    * `sudo systemctl disable SERVICE`
    * `sudo systemctl is-enabled SERVICE`

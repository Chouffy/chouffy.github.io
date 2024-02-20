---
aliases: mount, Linux File Systems Table, 
---
Is a [[Linux]] system configuration file read by the `mount` command to determine the [[file system]] organization.
## Configuration
- One line of config comprise of
	- Source
	- Destination
	- System
	- Options
	- Dumping ≈ outdated method of backup for cases when the system went down.  You should leave this as “0”.
	- Passing = 1 to do `fsck` on mount, 0 otherwise
### Options
- `auto` / `noauto`
	- Specify whether the partition should be automatically mounted on boot.  You can block specific partitions from mounting at boot-up by using “noauto”.
- `exec` / `noexec`
	- Specifies whether the partition can execute binaries.  If you have a scratch partition that you compile on, then this would be useful, or maybe if you have /home on a separate file system.  If you’re concerned about security, change this to “noexec”.
- `ro` / `rw`
	- “ro” is read-only, and “rw” is read-write.  If you want to be able to write to a file-system as the user and not as root, you’ll need to have “rw” specified.
- `sync` / `async`
	- This one is interesting.  “sync” forces writing to occur immediately on execution of the command
- `nouser` / `user`
	- This allows the user to have mounting and unmounting privileges.  An important note is that “user” automatically implies “noexec” 
- `atime` / `noatime` / `relatime` / `strictatime`
	- Update access time: `atime` (update on access), `noatime` (do not update), `relatime` (update atime if older than mtime, default)
- `defaults`
	- Use default settings

Specific to [[Network File System|NFS]]
- `soft` / `hard`
	- When the mount option ‘hard’ is set, if the NFS server crashes or becomes unresponsive, the NFS requests will be retried indefinitely. You can set the mount option ‘intr’, so that the process can be interrupted. When the NFS server comes back online, the process can be continued from where it was while the server became unresponsive.
	- When the option ‘soft’ is set, the process will be reported an error when the NFS server is unresponsive after waiting for a period of time (defined by the ‘timeo’ option). In certain cases ‘soft’ option can cause data corruption and loss of data. So, it is recommended to use hard and intr options.
- `_netdev`
	- Force [[systemd]] to consider ressource as network mount
## Examples
### USB Disks
1. Several options to see devices
    * `sudo blkid` to locate block devices
    * `sudo lsblk` to list mounted block devices
    * `ls /dev` to check where the USB stick is mounted
1. `sudo fdisk /dev/sdXX`
    1. `p` to list existing partition
    1. `g` to create a new GPT partition table or `o` for a DOS partition table
    1. `n` to create a new partition
    1. `w` write to disk and exit
1. `sudo mkfs.ext4 /dev/sdXX00` to create an ext4 partition
1. `sudo mkdir /media/usbdrive` to create a directory that will host the partition
    * Choose `/mnt` for temporary mounts
    * Choose `/media` for automatics mounts
1. `sudo mount /dev/sdXX00 /media/usbdrive -o umask=000` to mount the USB key with all user access
1. `sudo umount /dev/sdXX00` to unmount
1. If you want to make it permanent
    * Edit `sudo nano /etc/fstab`
    * Add a line `/dev/sdXX00       /media/usbdrive           ext4    defaults        0       0 `
### [[Network File System|NFS]]
- In the command line: `sudo mount -t nfs 192.168.0.0:/mnt/tank/data/nfs /nfs/`
	- Add `-o ro` for read only
	- Need to install `nfs-common` before
- In the [[fstab]]:
```
SERVER_IP:/mnt/tank/data/nfs /nfs   nfs  rw,async,noatime,hard,x-systemd.automount   0    0
```
### [[SquashFS]]
- Mount: `sudo mount -o loop archive.tcz ./test ​`
	- `test` directory must exist beforehand
- Unmount: `sudo umount ./test ​`
## Ressources
- [How fstab works](https://www.howtogeek.com/howto/38125/htg-explains-what-is-the-linux-fstab-and-how-does-it-work/)
- [Linux NFS Mount Entry in fstab (/etc/fstab) with Example](https://linuxopsys.com/topics/linux-nfs-mount-entry-in-fstab-with-example#1_Softhard)
- [systemd mount](https://www.freedesktop.org/software/systemd/man/systemd.mount.html)
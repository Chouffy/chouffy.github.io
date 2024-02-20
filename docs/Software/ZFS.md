---
aliases: Zettabyte File System
---
Is a [[file system]] used in few [[Operating System]], mostly for storage & backup use-cases.

Links:
- [Very good first introduction by TrueNAS](https://www.truenas.com/docs/references/zfsprimer/)
- [A Closer Look at ZFS, Vdevs and Performance](https://constantin.glez.de/2010/06/04/a-closer-look-zfs-vdevs-and-performance/)
- [ZFS 101—Understanding ZFS storage and performance - Ars Technica](https://arstechnica.com/information-technology/2020/05/zfs-101-understanding-zfs-storage-and-performance/)
- [Deep-dive on ZFS on Linux - Proxmox Wiki](https://pve.proxmox.com/wiki/ZFS_on_Linux)
## Introduction
See the introduction done by users in [TrueNAS forum](https://www.truenas.com/community/resources/introduction-to-zfs.111/):
![[Introduction to ZFS R1d.pdf]]
## Concepts
### Capabilities
- Copy on Write filesystem
- Snapshots
- Self-healing
- RAIDZ
	- *The number after the RAIDZ indicates how many disks per vdev you can lose without losing data*
	- RAIDZ1
		- Not recommanded with disks > 1 Tib
### Terminology
![[99d3a58102ba1fd4e99f752fe8be688207628d8a.webp]]

- `vdev` = virtual device
	- for data, possibilities:
		- single disk - stripe: send all writes to all disks in parallel, for aggregated workflow (not at the app level)
		- 2+ disks mirrored
			- n-1 disk can be lost without data lost
			- support silent corruption fix, based on the other disk and checksum
			- goes as fast as the slowest disk in write
			- goes quicker in read: aggregate IOPS of all disks
		- group of disks in RAIDZ
			- any number of data disk, defined (1 to 3) parity disks 
			- write
				- one block sliced up across disks
				- doesn't use all data disks if necessary 
				- no write hole due to Copy on Write, as uberblock is last operation (unlike RAID-5)
				- no battery backup necessary 
				- IOPS of the slowest disk 
			- read
				- IOPS of the slowest disk
		- Recommended 3 to 9 disk per vdev
			- The smallest disk size is used
		- Disk capacity
			- At 90% capacity, switch from performance to space optimization
	- other type - taken from [here](https://forum.level1techs.com/t/getting-started-with-truenas-scale-part-2-learning-zfs-storage-in-truenas-creating-a-pool-dataset-and-snapshot-task/182481/1#vdevs-4)
		- **DATA**: A VDEV used to store the Data stored in the Pool and its Datasets
		- **Cache**: A VDEV used for L2ARC Cache, optional and only useful if RAM is maxed out
		- **LOG**: A dedicated VDEV for ZFS’s intent log, can improve performance
		- **Hot Spare**: A VDEV for spare Disks that can automatically replace broken ones in Data VDEVs
		- **Metadata**: A dedicated VDEV to store Metadata
		- **Dedup**: A dedicated VDEV to Store deduplication data (Deduplication is not recommended)
- `pool` = 1+ `vdev`
	- Can be encrypted
	- Contains datasets ≈ partitions
		- Can be encrypted
		- Snapshot
		- Quotas
	- Contains `zvol`: block devices for swap or [[Virtualization|VM]] disks
## Notes
- On ECC Memory Error Correction
	- [Should have an ECC memory](https://openzfs.github.io/openzfs-docs/Project%20and%20Community/FAQ.html#do-i-have-to-use-ecc-memory-for-zfs) - but the advice is not a must, and advisable for any file system
		- See also [Will ZFS and non-ECC RAM kill your data? - JRS Systems: the blog](https://jrs-s.net/2015/02/03/will-zfs-and-non-ecc-ram-kill-your-data/) → TL;DR: no.
- On Encryption
	- See [TrueNAS Encryption documentation](https://www.truenas.com/docs/scale/scaletutorials/storage/datasets/encryptionscale/)
	- Don't use it at the pool level if you have only 1 pool
- On system design
	- Check out the [TrueNAS Community Hardware Guide](https://www.truenas.com/community/resources/hardware-recommendations-guide.12/)
	- And also [TrueNAS Hardware Guide](https://www.truenas.com/docs/scale/gettingstarted/scalehardwareguide/)
### [[Random Access Memory|RAM]]
- Consume a lot of RAM *with deduplication*: ~1GB per TB per physical disk; minimum 8 Gb - [source](https://serverfault.com/questions/569354/freenas-do-i-need-1gb-per-tb-of-usable-storage-or-1gb-of-memory-per-tb-of-phys)
- Adaptative Replacement Cache uses 50% of the host memory by default, but can be configured (see [[Proxmox]] [Wiki](https://pve.proxmox.com/wiki/ZFS_on_Linux#sysadmin_zfs_limit_memory_usage))
	- Rule of thumb: 2 GiB base + 1 GiB for each TiB of storage
	- Change `zfs_arc_max`
		- Temporary change: `echo "$[4 * 1024*1024*1024]" >/sys/module/zfs/parameters/zfs_arc_max` for 10 GiB
		- Permanent change: 
			- Create/Edit `/etc/modprobe.d/zfs.conf`
			- Add `options zfs zfs_arc_max=4294967296` (this sets to 4 GiB)
			- Update your `initramfs` with `update-initramfs -u -k all`
	- `zfs_arc_min` must be ≤ to `zfs_arc_max`
		- Default: 1/32 of system memory
### Commands
- Binaries, if not linked, are available in `/sbin` for [[TrueNAS SCALE]]
- Move a `zvol` from one `zpool` to another: `zfs send aaa/myVol | zfs receive -v bbb/myVol`
- Resize a `zvol`: `zfs set volsize=new_size tank/name_of_the_zvol`
- Export a [[Virtualization|VM]]: `dd if=/dev/zvol/pool0/server-xxxxxx of=/tmp/server.raw bs=8m`
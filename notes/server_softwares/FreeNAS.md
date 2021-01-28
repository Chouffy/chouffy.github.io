---
parent: Server Softwares
---

# FreeNAS

## ZFS

[Good newbie intro to ZFS](https://www.ixsystems.com/documentation/freenas/11.3-U5/zfsprimer.html#zfs-primer)  

tl;dr by importance:

* Self-healink, no `chkdsk` anymore but you need to `srub` (= check checksum) montly
* Keep your pool >10% free space
* `resilvering` = in RAIDZ case and a drive failed, this is the initialization phase for the new drive
* Snapshot possible with no space overhead as CoW filesystem. This is applied for system config.
* Structuration
    1. `vdev` = group of disks
    1. `pool` = filesystem
    1. `zvol` = fixed sized raw volume or `dataset` = dynamically sized file volume
* Compression possible

## Setup

Configure:

* Accounts
    * Users
        * root email
* System
    * Email
    * Alert Service > Email
* Task
    * SMART Task
        * Create short self test once a week, and long self test once a month ([cf FreeNAS doc](https://www.ixsystems.com/documentation/freenas/11.3-U5/tasks.html#s-m-a-r-t-tests))
    * Periodic Snapshot
        * Create daily snapshot

Some guides:

* [Windows SMB Share](https://www.ixsystems.com/documentation/freenas/11.3-U5/sharing.html#windows-smb-shares)

Checklist to create a SMB share:

1. Create a dataset with Share Type = SMB
1. Assign ACL for a group ([help here](https://www.ixsystems.com/documentation/freenas/11.3-U5/storage.html#ace-permissions))

## Plugins

### Duplicati

* Is available as a Community plugin
* Password cannot be changed from GUI, need to execute `sysrc "duplicati_web_pass=PASSWORD"` - [Source](https://github.com/rexit1982/iocage-plugin-duplicati/blob/master/post_install.sh)
* Jail need to be updated ... but how?

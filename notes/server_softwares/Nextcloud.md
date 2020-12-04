---
parent: Server Softwares
last_modified_date: 2020-12-04
---

# Nextcloud

## Setup

[Reference page for the Snap](https://github.com/nextcloud/nextcloud-snap)

1. `sudo snap install nextcloud`
1. Allow 80 and 443 in firewall
1. Edit trusted domain `sudo nextcloud.occ config:system:set trusted_domains 1 --value=domain.example.com`
1. `sudo nextcloud.enable-https lets-encrypt`

## Other stuff

* Host X.X.X.X was not connected to because it violates local access rules. -> [Fix here](https://help.nextcloud.com/t/violates-local-access-rules-in-talk-9/84471/2)

## Maintenance

### Data

* `sudo nextcloud.export -abc` to export everything except user data
* User data are in `/var/snap/nextcloud/common/`

### Backup

Based on [How To Backup Nextcloud](https://kevq.uk/how-to-backup-nextcloud/)

1. Create `ncbackup` user
1. Edit `/usr/sbin/ncbackup.sh` with
    ```bash
    #!/bin/bash
    # Output to a logfile
    exec &> /home/ncbackup/Backups/Logs/"$(date '+%Y-%m-%d').txt"
    echo "Starting Nextcloud export..."

    # Run a Nextcloud backup without data (will be saved later with Duplicati)
    nextcloud.export -abc
    echo "Export complete"

    # Clean the Backup/Data folder
    rm -r /home/ncbackup/Backups/Data/*
    # Move backup from yyyymm... directory to our directory. 2* is used to filter out folder starting with 2, like 2020
    mv /var/snap/nextcloud/common/backups/2*/* /var/snap/nextcloud/common/backups/2*/.* /home/ncbackup/Backups/Data/
    # Remove backup folder
    rm -r /var/snap/nextcloud/common/backups/2*/
    echo "Nextcloud backup successfully moved to /home/ncbackup/Backups/Data/"

    # Remove logs older than 14 days
    find /home/ncbackup/Backups/Logs -mtime +14 -type f -delete
    echo "Removed old logs"

    echo "Nextcloud backup completed successfully."
    ```
1. Make the file executable `sudo chmod +x /usr/sbin/ncbackup.sh`
1. Allow the file to be executed without sudo interaction
    1. `sudo visudo`
    1. `ncbackup ALL=(ALL) NOPASSWD: /usr/sbin/ncbackup.sh`
1. Remove shell access from `ncbackup` user `sudo usermod -s /sbin/nologin ncbackup`
    * To add it back `sudo usermod -s /bin/bash ncbackup`
1. Schedule the backup
    1. Open crontab `sudo crontab -u ncbackup -e`
    1. Make the script run at 0200 each day `0 2 * * * sudo /usr/sbin/ncbackup.sh`

---
parent: Server Softwares
---

# Nextcloud

## Setup

[Reference page for the Snap](https://github.com/nextcloud/nextcloud-snap)

1. `sudo snap install nextcloud`
1. Allow 80 and 443 in firewall
1. Edit trusted domain `sudo nextcloud.occ config:system:set trusted_domains 1 --value=domain.example.com`
1. `sudo nextcloud.enable-https lets-encrypt`
1. Add NAT translation on the home router
1. Add domain A record in my DNS zone
1. Setup Sendgrid for SMTP server

## Other stuff

* Host X.X.X.X was not connected to because it violates local access rules. -> [Fix here](https://help.nextcloud.com/t/violates-local-access-rules-in-talk-9/84471/2)

## Maintenance

### Data

* `sudo nextcloud.export -abc` to export everything except user data
* `sudo nextcloud.occ files:scan-app-data` to force scan all app data
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
    1. Make the script run at 0200 every day `0 2 * * * sudo /usr/sbin/ncbackup.sh`

Sources:

* [Reference page for the Snap](https://github.com/nextcloud/nextcloud-snap)
* [How To Setup A Nextcloud Server In Ubuntu](https://kevq.uk/how-to-setup-a-nextcloud-server-in-ubuntu)
* [OCC Command line tool](https://docs.nextcloud.com/server/15/admin_manual/configuration_server/occ_command.html)
    * [Most notably the config commmand](https://docs.nextcloud.com/server/15/admin_manual/configuration_server/occ_command.html#config-commands) instead of changing `config.php`
    * Get example: `sudo nextcloud.occ config:system:get version`
    * Set example: `sudo nextcloud.occ config:system:set logtimezone --value="Europe/Berlin"`

## Good apps

### [Preview Generator](https://github.com/rullzer/previewgenerator) for thumbnails

1. Suggested: change the preview generation behavior - [great post here](http://chrisweber.com/blog/nextcloud-image-previews), I just changed quality to 70
1. Install from app store
1. `sudo nextcloud.occ preview:generate-all`
1. Make a script for that and schedule it
    1. Edit `/usr/sbin/ncpreviewgenerator.sh` with

        ```bash
        #!/bin/bash
        # Output to a logfile
        exec &> /home/ncbackup/PreviewGenerator/"$(date '+%Y-%m-%d %T').txt"

        echo "Starting Nextcloud Preview Generator (with logs)..."
        nextcloud.occ preview:pre-generate -vvv
        echo "Done."

        # Remove logs older than 14 days
        find /home/ncbackup/PreviewGenerator -mtime +14 -type f -delete
        echo "Removed old logs"

        echo "Nextcloud Preview Generator completed successfully."
        ```

    1. `sudo chmod +x /usr/sbin/ncpreviewgenerator.sh`
    1. `sudo visudo`
    1. `ncbackup ALL=(ALL) NOPASSWD: /usr/sbin/ncpreviewgenerator.sh`
    1. Remove shell access from `ncbackup` user `sudo usermod -s /sbin/nologin ncbackup`
    1. Schedule the backup
        1. Open crontab `sudo crontab -u ncbackup -e`
        1. Make the script run every hour every hour `30 * * * * sudo /usr/sbin/ncpreviewgenerator.sh`

Notes:

* Use `-vvv` argument to output each opened file

### RainLoop Webmail

* [Original project docs](http://www.rainloop.net/docs/)
* [Rainloop-nextcloud project](https://github.com/pierre-alain-b/rainloop-nextcloud)

1. Install plugin
1. Login to admin panel in `root/index.php/apps/rainloop/app/`
    1. Change admin password
    1. Add domain
1. Login with standard link using user mail and mail password
1. Enable automatic login in Settings > Additional Settings

### Music

* [Project GitHub](https://github.com/owncloud/music)
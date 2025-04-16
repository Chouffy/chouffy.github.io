Is a set of [[productivity]] [[Software]] that can run on a [[NAS]]
## Setup using [[Docker]]
- occ commands: `sudo docker exec --user www-data -it nextcloud-aio-nextcloud php occ your-command`
- Activate overcommit for [[Redis]] (see [discussion](https://github.com/nextcloud/all-in-one/discussions/1731)): `echo "vm.overcommit_memory = 1" | sudo tee /etc/sysctl.d/nextcloud-aio-memory-overcommit.conf`
## Setup using [[Snap]]
[Reference page for the Snap](https://github.com/nextcloud/nextcloud-snap)
1. `sudo snap install nextcloud`
1. Allow 80 and 443 in firewall
1. Edit trusted domain `sudo nextcloud.occ config:system:set trusted_domains 1 --value=domain.example.com`
1. `sudo nextcloud.enable-https lets-encrypt`
1. Add NAT translation on the home router
1. Add domain A record in my DNS zone
1. Setup [[Sendgrid]] for SMTP server
### Other stuff
* Host `X.X.X.X` was not connected to because it violates local access rules. → [Fix here](https://help.nextcloud.com/t/violates-local-access-rules-in-talk-9/84471/2)
* Change trash bin configuration: [see this article](https://docs.nextcloud.com/server/latest/admin_manual/configuration_files/trashbin_configuration.html)
* If you have `sudo: nextcloud.occ: command not found`, then maybe your system doesn't add `/snap/bin` to the PATH → Use `sudo /snap/bin/nextcloud.occ`
### Cloudflare Tunnel
## Integrations with other devices
### Outlook calendar
Use [Outlook CalDav Synchronizer](https://github.com/aluxnimm/outlookcaldavsynchronizer) - but untestes
## Maintenance
### Data
* `sudo nextcloud.export -abc` to export everything except user data
* `sudo nextcloud.occ files:scan --all` to force scan all files, useful to fix checksum issues
* `sudo nextcloud.occ files:scan-app-data` to force scan all app data
* User data are in `/var/snap/nextcloud/common/`
#### Remove a file that is only on the database and not in the file system
1. Find the `fileid` of the affected file - this can be done from the web interface
2. Check that the file is deleted on the filesystem
3. Open the SQL client, like `nextcloud.mysql-client` for the snap version
4. Delete the affected file `delete from nextcloud.oc_filecache where fileid in (FILEID);`
5. Rescan the files `nextcloud.occ files:scan --all`
#### Browse the database
- `oc_filecache` contains all files in the instance
	- `path` contains path per user, like `files/RootDir/SubDir`
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

- Sources:
	* [Reference page for the Snap](https://github.com/nextcloud/nextcloud-snap)
	* [How To Setup A Nextcloud Server In Ubuntu](https://kevq.uk/how-to-setup-a-nextcloud-server-in-ubuntu)
	* [OCC Command line tool](https://docs.nextcloud.com/server/15/admin_manual/configuration_server/occ_command.html)
	    * [Most notably the config command](https://docs.nextcloud.com/server/15/admin_manual/configuration_server/occ_command.html#config-commands) instead of changing `config.php`
	    * Get example: `sudo nextcloud.occ config:system:get version`
	    * Set example: `sudo nextcloud.occ config:system:set logtimezone --value="Europe/Berlin"`
## Good apps
### ClamAV for antivirus
- [Documentation](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/antivirus_configuration.html)
- Disable background task with `occ config:app:set files_antivirus av_background_scan --value="off"`
### [Preview Generator](https://github.com/rullzer/previewgenerator) for thumbnails
1. Suggested: change the preview generation behavior - [great post here](http://chrisweber.com/blog/nextcloud-image-previews), I just changed quality to 70
```sh
occ config:app:set previewgenerator squareSizes --value="32 256"
occ config:app:set previewgenerator widthSizes  --value="256 384"
occ config:app:set previewgenerator heightSizes --value="256"
occ config:app:set preview jpeg_quality --value="60"
```
1. Install from app store
2. `sudo nextcloud.occ preview:generate-all`
3. Make a script for that and schedule it
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
        1. Make the script run every 30 min `30 * * * * sudo /usr/sbin/ncpreviewgenerator.sh`

Notes:
* Use `-vvv` argument to output each opened file
* Command for AIO Docker [here](https://github.com/nextcloud/all-in-one/discussions/2810)
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
### OVH Dynamic IP

OK, it's not an app, just a script that I run every 6 hours.

You need to setup first a DynHost username - see [this documentation](https://docs.ovh.com/gb/en/domains/hosting_dynhost/) and calculate the [[Basic Authentication]] in the header.

```bash
#!/bin/bash
# Output to a logfile
exec &> /home/ncbackup/DDNS/"$(date '+%Y-%m-%d %T').txt"
echo "Starting DDNS update ..."

curl -i -H "Authorization: Basic COPY_YOUR_KEY_HERE=" ""https://www.ovh.com/nic/update?system=dyndns'&'hostname=DOMAIN.EXAMPLE.ORG""
# Remove logs older than 14 days
find /home/ncbackup/DDNS -mtime +14 -type f -delete
echo "Removed old logs"
```
### Maps
- Mark a picture folder to be scanned: add an empty file `.index.maps`
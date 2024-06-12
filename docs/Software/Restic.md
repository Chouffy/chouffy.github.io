Is a [[Backup]] [[Software]] that can run on [[Windows]], [[Linux]], [[MacOS]]

Links: 
- [Website](https://restic.net/)
- [GitHub](https://github.com/restic/restic)
	- [Releases](https://github.com/restic/restic/releases)
- [Documentation](https://restic.readthedocs.io/en/stable/)
	- [Command list](https://restic.readthedocs.io/en/latest/manual_rest.html)
	- [Environment variable list](https://restic.readthedocs.io/en/latest/040_backup.html?#environment-variables)
- [Forum](https://forum.restic.net/)
- [Backup script](https://github.com/Chouffy/restic_backup_powershell_script/)
## Reference
- Exclude `restic` from antivirus
- Configuration are held using environment variables using [[Batch]], [[PowerShell]] or [[bash]]
- Update binaries using `restic self-update`
### Initialize a repo
- `restic init` to create the remote repository
- Specify the repo with
	- `--repo repoPath` or `RESTIC_REPOSITORY` environment variable
	- `--repo /path/to/folder` for local files
	- `--repo sftp:user@host:/path/to/folder` for [[SFTP]]
	- `--repo rclone:<remote>:<path>` as defined in [[Rclone]] to access external cloud services
- Passwords can be provided via:
	- CLI, when the user execute `restic`
	- The variable `RESTIC_PASSWORD` or option
	- A file, defined in `--password-file file` or variable `RESTIC_PASSWORD_FILE`
	- An external software, called via `--password-command command` or variable `RESTIC_PASSWORD_COMMAND`
### Create a backup 
- `restic backup ~/dirA` to backup `dirA` to the repo
	- `restic backup /dirA /dirB` to backup multiple directories or files
- `restic backup /fileA.zip` to backup `fileA` to the repo
	- If `fileA` was part of `dirA`, it get saved at no extra cost 🤯
- [Use `stdin` as backup input](https://restic.readthedocs.io/en/latest/040_backup.html#reading-data-from-stdin) for CLI dump
- [Exclusions & inclusions filters](https://restic.readthedocs.io/en/latest/040_backup.html#excluding-files)
	- `--exclude-if-present .backupignore` will ignore the content of any directory with file `.backupignore` inside - only the directory name and this file will be saved
### View snapshots
- `restic snapshots` to view all snapshots in the repo - [doc](https://restic.readthedocs.io/en/latest/045_working_with_repos.html#listing-all-snapshots)
- `restic stats` to view information: size of all snapshots (not on disk), ...
- `restic diff snapshotID1 snapshotID2` to check difference between 2 snapshots
- - Add `--tag XYZ` to add identify information on creation or edition
### Manage data
#### Verification 
- `restic check` to verify structural consistency & integrity - Should be used regularly!
- `restic check --read-data` to verify backup data integrity
	- This command does it in full, but subset are possible - see [doc](https://restic.readthedocs.io/en/stable/045_working_with_repos.html#checking-integrity-and-consistency)
#### Removing snapshots
- `restic forget snapshotID|policy` to remove one snapshot 
	- Policy are defined [here](https://restic.readthedocs.io/en/stable/060_forget.html#removing-snapshots-according-to-a-policy)
	- Policy are chainable like `restic forget --keep-daily 7 --keep-weekly 5 --keep-monthly 6 --keep-yearly 1` for 100 years
	- Default policy is grouped per host name and path, can be changed with `--group-by 'tags` for instance
- `restic prune` to definitely remove data that are unlinked to any snapshot
	- It is advised to run a `restic check` after
- And `restic recover` to restore removed snapshot that are not `prune`ed
### Manage locks
- `restic unlock` to remove locks from the repo that are ≥ 30 min or created by local host
	- `restic unlock --remove-all` to force remove lock
### Restore data
- `restic ls <snapshot_id>` to list all files in the snapshot
	- `grep` can be used to find a file - see [[Linux#^a163bc]]
- `restic restore <snapshot_ID> --target /path/to/restore` to restore a snapshot to directory
	- `restic restore <snapshot id> --include=/path/to/files/we/want/to/restore --target=/path/where/to/restore` for a certain directory to a certain target directory
- `restic mount ~/tempmount/` to mount the whole backup repo
### Passwords
Multiple passwords (or called `key`) can be defined in one repo:
- `restic key list`
- `restic key add`
- `restic key remove <key_id>`
- `restic key passwd` to change current key
### CLI Flags

| Command             | Note                                                                                                                                                                                                          |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--use-fs-snapshot` | on [[Windows]] to use VSS and avoid file lock, bu there's some default exclusions (see [doc](https://learn.microsoft.com/en-us/windows/win32/backup/registry-keys-for-backup-and-restore#filesnottosnapshot)) |
| `--verbose`         | to see what is happening                                                                                                                                                                                      |
| `--verbose=2`       | to see more of what is happening: files and folder                                                                                                                                                            |
| `--dry-run`         | to try a command but not write anything to the repo                                                                                                                                                           |

## Scripting
- Scheduling must be done by host OS, cannot done by Restic
	- Or use specific things, like [resticker](https://github.com/djmaze/resticker/) for [[Docker]]
- Make sure that there's no already running instances!
### Windows
Process:
- Task scheduler will run the task
	- General
		- `Run whether user is logged on or not` and `Do not store password`
		- `Run with highest privilege`
	- Trigger: every day
	- Conditions: none
	- Settings:
		- ![[Pasted image 20230118173028.webp|450]]
- A script will be called to
	- check wheter the connection is metered or not - see [[gist.github.com - Powershell check if on metered network · GitHub]]
		- if true, it will send a ping to monitoring tool
	- do a `restic backup` according to pre-defined command
		- as admin in order to use VSS
		- send the result to monitoring tool
	- do a `restic forget` according to policy
		- send the result to monitoring tool
	- do a `restic check`
		- send the result to monitoring tool
- A lot of inspiration coming from [this set of script](https://github.com/kmwoley/restic-windows-backup)
### Linux
- Use the same [[PowerShell]] script than on [[Windows]] above
- Execute it, not as `root` but as dedicated `restic` user - see [restic doc](https://restic.readthedocs.io/en/stable/080_examples.html#full-backup-without-root)
	- Don't forget to set proper files & folder permissions and ownership
		- `chown -R root:restic /opt/restic/restic`
		- `chmod 750 /opt/restic/restic`
		- `setcap cap_dac_read_search=+ep /opt/restic/restic`
- Then schedule it with `crontab` - see [[Cron]]
## Related
- [Restic browser](https://github.com/emuell/restic-browser) to browse and restore backup repositories
- [Restic-windows-backup](https://github.com/kmwoley/restic-windows-backup), a collection of [[PowerShell]] scripts to automate backup
## Ressources
- [Official documentation](https://restic.readthedocs.io/en/stable/)
- Medium articles
	- [Introduction](https://medium.com/codex/restic-backup-i-simple-and-beautiful-backups-bdbbc178669d)
	- [In action](https://medium.com/codex/restic-backup-ii-in-action-d8bad3d9e034)
	- [Examples](https://medium.com/codex/restic-backup-iv-real-life-examples-677b4734eb9)
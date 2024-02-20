Is an [[Android]] [[Software]] to do [[synchronization]].

- [Purchase website](https://www.tacit.dk/foldersync/purchase/)
- [Help website](https://foldersync.io/docs/help/)
## Notes
### Advanced - One-way sync options
[Source](https://foldersync.io/docs/help/folderpairsettings/#advanced-one-way-sync-options)
-   **Move files to target folder:** For one-way sync only. After syncing of files, the source files are deleted. Use with care! Disabled by default.
-   **Only resync source files if modified:** Only works with one-way sync. Enable this option if you want to be able to delete files in target folder without these files being synced from source again. For example if you sync pictures from your device to a cloud folder, and want to be able to keep them on device and delete them in the cloud folder without them being re-synced later by FolderSync from the device.
-   **Copy files to time-stamped folder:** With the corresponding naming pattern field this can be used to use FolderSync for backing up files. Each sync will backup all files to a new subfolder in the target folder named accordingly to the naming-pattern configured. This can thus only be used with one-way sync type. See this link for details on how to use a custom naming pattern. Only available for one-way sync. Default format is “yyyy-MM-dd HH.mm.ss”. You can add your custom string in single quotes, eg. “yyyy-MM-dd HH.mm.ss ‘Pictures’” and it will result in a backup folder named something like “2021-01-02 12.05.22 Pictures”. Don’t include the double-quotes when entering format in the app. Resulting folder name has to be allowed for the file system or sync will fail.
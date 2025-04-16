This is a [[docs/How-To/index|How-To]] resize a [[Bitlocker]] ([[Windows]]) partition without unencrypting it:
1. Backup the Bitlocker keys
	1. Check the keys with `manage-bde -protectors -get C:`
2. Shrink other partitions to make some free, unused space
3. Start a WinPE environment
4. Move the partition 
Is a [[Linux]] [[Operating System]] running on phones and tablets.
## Software
- Activate developer mode: [tap multiple time Build Number](https://developer.android.com/studio/debug/dev-options)
### Useful list
* Files
    * [SQLite database editor](https://play.google.com/store/apps/details?id=com.tomminosoftware.sqliteeditor) to edit app database
    * [Save on Device](https://github.com/lmj0011/save-on-device) to save from Send any file to any place, including Nextcloud
* Network
    * [Ning](https://github.com/csicar/Ning) to scan devices on network
    * [WLANScanner](https://github.com/bewue/WLANScanner) to scan Wi-Fi networks and view their channels
    * [RethinkDNS](https://github.com/celzero/rethink-app) to monitor and filter network traffic by apps, IP, DNS resolver and more
    * [Private DNS Quick Tile](https://github.com/joshuawolfsohn/Private-DNS-Quick-Tile) to turn Private DNS on and off
	    * Require to give permission via adb: `adb shell pm grant com.jpwolfso.privdnsqt android.permission.WRITE_SECURE_SETTINGS`
* System
    * [App Manager](https://muntashirakon.github.io/AppManager/) to enable/disable apps and launch hidden activities
* Multimedia
	* [Oto Music](https://play.google.com/store/apps/details?id=com.piyush.music) - to test
### Remote control from PC using [scrpy](https://github.com/Genymobile/scrcpy)
Useful keyboard shortcuts:

Keys | Usage
-|-
`ctrl` + mouse | Pinch to zoom
`mod` + `r` | Rotate screen

### Create work profile with [Island](https://github.com/oasisfeng/island)
* Just install it from the Play Store and set it up!
* To share file between mainland and island:
    * In [Material Files](https://github.com/zhanghai/MaterialFiles)
        1. Create a new external connection
        1. Select a Work folder
    * This will give a read-only access, but this can be done in both lands
## Network
- [[Domain Name Server|DNS]] over TLS (DoT) can be configured in `Private DNS`
## Files & Apps
### Extract an APK
- On a PC with ADB
- `adb shell pm list packages` to list packages
- `adb shell pm path com.whatsapp` to list path of the apk
- `adb pull path-of-app` to extract the apk
## Reverse engineering
### Decompiling APK
This blog post has some good suggestions.
* [JADX](https://github.com/skylot/jadx) Dex to Java decompiler

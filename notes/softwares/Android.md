---
parent: Softwares
---

# Android

## Useful software packages

### Remote control from PC using [scrpy](https://github.com/Genymobile/scrcpy)

Useful keyboard shortcuts:

Keys | Usage
-|-
`ctrl` + mouse | Pinch to zoom
`mod` + `r` | Rotate screen

### Propers maps/cartography with [OsmAnd](https://osmand.net/)

* Use the version on F-Droid for all features
* Regarding the [Online Maps plugin](https://osmand.net/docs/user/plugins/online-map/)
    * Some additional packs can be added directly as URL, such as [Thunderforest](https://www.thunderforest.com/)
    * A lot of additional map packs can be found [on AnyGIS](https://anygis.ru/Web/Html/Osmand_en)
    * How to install IGN France SCAN maps:
        * [sqlite to import](https://forum.openstreetmap.fr/t/ign-sur-l-application-osmand/6961/10)
        * Correction needed for `tilesize` in the database from 512 to 256 - [source](https://forum.openstreetmap.fr/t/ign-sur-l-application-osmand/6961/46)

## Magisk

### Install via direct sideload

1. [Download the latest release](https://github.com/topjohnwu/Magisk/releases)
1. On device: Install the APK then reboot to recovery
1. On PC: rename the `*.apk` to `*.zip`, and sideload it

### Remove all installed modules (may fix bootloop)

1. Install Magisk
1. Reboot
1. `adb wait-for-device shell magisk` --remove-modules while booting

### Ressources

* [XDA: Best Magisk modules](https://www.xda-developers.com/best-magisk-modules/)
* Pass SafetyNet with [SafetyNet-Fix](https://github.com/kdrag0n/safetynet-fix/releases)
* Remove navbar [HideNavBar](https://github.com/Magisk-Modules-Repo/HideNavBar/releases)

## Android Debug Bridge

* If you want to filter out logcat: `adb shell`, then `logcat | grep XYZ`

### Use it via WLAN

If it doesn't work, try in admin

```bash
adb tcpip 5555
adb connect 192.168.43.1:5555
```

## Reverse engineering

### Decompiling APK

[This blog post] has some good suggestions.

* [JADX](https://github.com/skylot/jadx) Dex to Java decompiler

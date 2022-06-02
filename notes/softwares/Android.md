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

### Create work profile with [Island](https://github.com/oasisfeng/island)

* Just install it from the Play Store and set it up!
* To share file between mainland and island:
    * In [Material Files](https://github.com/zhanghai/MaterialFiles)
        1.  Create a new external connection
        1.  Select a Work folder
    * This will give a read-only access, but this can be done in both lands

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

* Use adb as root: `adb root`
* If you want to filter out logcat: `adb shell`, then `logcat | grep XYZ`

### Shell commands

* Disable one application `pm disable org.packagename`

### Use it via WLAN

If it doesn't work, try in admin

```bash
adb tcpip 5555
adb connect 192.168.43.1:5555
```

## Android Auto

### Allow non-Play store app on Android Auto

Useful to use [OsmAnd~](https://f-droid.org/en/packages/net.osmand.plus/) with Android Auto!

1. The above will delete app data, so backup first!
1. Clear storage of Android Auto
1. Install [AA-Tweaker](https://github.com/shmykelsa/AA-Tweaker)
1. Go to AA-Tweaker, select the wished app and tap "Patch custom apps"
1. Reboot
1. Go to the Android Auto settings -> Customize Launcher to see if the app appear

### Desktop Head Unit

DHU is an Android Auto head unit emulator.

1. Install
    1. Install [Android Studio Beta](https://developer.android.com/studio/preview)
    1. In Tools -> SDK Manager, go to tab SDK Tools and install "Android Auto Desktop Head Unit Emulator"
1. Find the DHU executable
    1. In the same window, copy the Android SDK Location and open it
    1. Navigate to `SDK_LOCATION/extras/google/auto/`
1. Connect with ADB Tunneling - [Source](https://developer.android.com/training/cars/testing#connection-adb)
    1. Set developper mode on Android Auto
    1. In the overflow menu, select Start HDU Server
    1. Redirect the port `adb forward tcp:5277 tcp:5277`
    1. Launch the DHU Server `desktop-head-unit.exe`

## Reverse engineering

### Decompiling APK

[This blog post] has some good suggestions.

* [JADX](https://github.com/skylot/jadx) Dex to Java decompiler

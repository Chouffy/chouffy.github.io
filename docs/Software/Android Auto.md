Is a [[Software]] part of [[Android]] allowing an [[vehicule]] display to be used
## Android Auto
### Allow non-Play store app on Android Auto
Useful to use [OsmAnd~](https://f-droid.org/en/packages/net.osmand.plus/) with Android Auto!
#### With ADB
Need to be checked - from this [source](https://www.kulesz.me/post/170_osmand_auto/):
```sh
adb push net.osmand.plus_424.apk /data/local/tmp
adb shell pm install -i "com.android.vending" -r /data/local/tmp/net.osmand.plus_424.apk
```
#### With A-Tweaker
1. The above will delete app data, so backup first!
1. Clear storage of Android Auto
1. Install [AA-Tweaker](https://github.com/shmykelsa/AA-Tweaker)
1. Go to AA-Tweaker, select the wished app and tap "Patch custom apps"
1. Reboot
1. Go to the Android Auto settings → Customize Launcher to see if the app appear
### Desktop Head Unit
DHU is an Android Auto head unit emulator.
1. Install
    1. Install [Android Studio Beta](https://developer.android.com/studio/preview)
    1. In Tools → SDK Manager, go to tab SDK Tools and install "Android Auto Desktop Head Unit Emulator"
1. Find the DHU executable
    1. In the same window, copy the Android SDK Location and open it
    1. Navigate to `SDK_LOCATION/extras/google/auto/`
1. Connect with ADB Tunneling - [Source](https://developer.android.com/training/cars/testing#connection-adb)
    1. Set developer mode on Android Auto
    1. In the overflow menu, select Start HDU Server
    1. Redirect the port `adb forward tcp:5277 tcp:5277`
    1. Launch the DHU Server `desktop-head-unit.exe`
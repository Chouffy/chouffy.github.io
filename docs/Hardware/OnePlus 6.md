Is an [[Android]] [[phone]].
## TCPDump on OnePlus
OnePlus' devices have *OnePlusLogKit* and can use it to have `tcpdump`:

1. Open `OnePlusLogKit` with `*#800#` > `oneplus Logkit`
1. Check `Network tcpdump log`
1. Check `save log`. It's unnecessary to reboot
1. Do your thing in Libratone app
1. Go back to `OnePlusLogKit`, uncheck all
1. Tap on `Copy logs to built-in SD card`
1. Wait for the message with path to recover log
1. Copy all logs somewhere and do some cleanup (logs are huge)
1. Open the `tcpdump` in [[Wireshark]]
## Camera & other apps
If the camera has trouble to focus in *Google Translate*, select *Camera 1* in app settings.
## LineageOS
### Install
[See the LineageOS wiki page!](https://wiki.lineageos.org/devices/enchilada/)

1. Activate options on the phone
    1. In Settings → About → Tap "Build Number" x7
    1. In Settings → Developers mode. Activate:
        * ADB
        * OEM Unlock
1. Install OnePlus drivers
    1. Reboot your PC with disabled driver checks - Use a Virtual Machine!
    1. Install OnePlus specific drivers
1. Set up adb and fastboot
    1. [Download package](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
    1. Add the un-zipped package to PATH
1. Boot a custom recovery
    1. [Download](https://download.lineageos.org/enchilada)
    ```sh
    adb reboot bootloader
    fastboot devices
    fastboot flash boot <recovery_filename>.img
    ```
1. Ensure all partitions are consistent
    1. Download [copy-partitions-20210323_1922.zip](https://www.androidfilehost.com/?fid=2188818919693768129)
    1. On device: Apply update → Apply from adb
    1. `adb sideload copy-partitions-20210323_1922.zip`
    1. On device: Advanced → Reboot To Recovery
1. Install LineageOS
    1. [Download](https://download.lineageos.org/enchilada)
    1. On device: Format data / factory reset
    1. Sideload the lineageos zip
    1. Reboot to recovery
1. Install Google Apps
    1. See [this wiki from LineageOS](https://wiki.lineageos.org/gapps) for download
    1. Sideload the zip
### Update
1. Use the built-in updater
1. After reboot, check if Magisk is affected and sideload if necessary
1. If no sideload is wished
    1. Download the recovery image [on LineageOS website](https://download.lineageos.org/enchilada)
    1. Transfer image to phone
    1. Open the Magisk app, press install and patch the image
    1. Transfer patched image to PC
    1. Reboot to bootloader
    1. Install the bootloader with `fastboot flash boot <recovery_filename>.img` and reboot
### Camera on LineageOS
You can find the proper [GCam](https://www.celsoazevedo.com/) in [this Telegram group](http://t.me/latestgcamop6t).

---
aliases:
  - adb
---
Is a [[Software]] part of [[Android]] that allows connection to devices
## Notes
* Activate Developer Mode: In Settings → About device → Software info and tap on Build number
* Use ADB as root: `adb root`
* If you want to filter out logcat: `adb shell`, then `logcat | grep XYZ`
* If you want to know which architecture you're on, then: `adb shell getprop ro.product.cpu.abi`
### Shell commands
* Disable one application `pm disable org.packagename`
* As root, switch from one SIM to the next with `2` being the SIM to be switched to:
    ```sh
    settings put global multi_sim_data_call 2
    settings put global config_current_primary_sub 2 simdata
    am broadcast -a android.intent.action.ACTION_DEFAULT_DATA_SUBSCRIPTION_CHANGED
    ```
### Use it via WLAN
If it doesn't work, try in admin
```bash
adb tcpip 5555
adb connect 192.168.43.1:5555
```

Is a [[Software]] framework enabling unintended modification to [[Android]]
## Setup
### Install via direct sideload
1. [Download the latest release](https://github.com/topjohnwu/Magisk/releases)
1. On device: Install the APK then reboot to recovery
1. On PC: rename the `*.apk` to `*.zip`, and sideload it
### Remove all installed modules (may fix bootloop)
1. Install Magisk
1. Reboot
1. `adb wait-for-device shell magisk` --remove-modules while booting
## Great Magisk modules
* [XDA: Best Magisk modules](https://www.xda-developers.com/best-magisk-modules/)
* Pass SafetyNet with [SafetyNet-Fix](https://github.com/kdrag0n/safetynet-fix/releases)
* Remove navbar [HideNavBar](https://github.com/Magisk-Modules-Repo/HideNavBar/releases)
* Change default Quickstep provider (given compatible launcher) with [QuickSwitch](https://github.com/skittles9823/QuickSwitch/releases)
* Install APK automatically without prompt with F-Droid alternative: [Aurora Services](https://gitlab.com/AuroraOSS/AuroraServices/-/releases)
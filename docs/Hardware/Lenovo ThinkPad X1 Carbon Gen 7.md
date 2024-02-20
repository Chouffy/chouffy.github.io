---
aliases: X1C7
---
A nice [[Windows]] [[laptop]] from [[Lenovo]], circa 2020
## Update
- Use those [Lenovo Tools](https://support.lenovo.com/us/en/solutions/ht037099) System Update instead of the Metro app to update drivers
## Fix for touchpad unresponsive after wake from sleep
In the device manager, disable power management linked to the `Intel(R) Serial IO I2C Host Controller` where the touchpad is linked - [source](https://www.reddit.com/r/thinkpad/comments/jva2o9/touchpad_turns_unresponsive_after_wake_from_sleep/)
![[Windows - Disable Power Management of a device]]
## Middle mouse button for click and scroll
[TPMiddle](https://sdx1.net/tools/tpmiddle/) was great to do it, but is incompatible with the X1C7 - check out [[W10Wheel.net]]
## Undervolting
[ThrottleStop Guide 2020](https://www.ultrabookreview.com/31385-the-throttlestop-guide/)
Current configuration with an Intel i7-8665U:

FIVR Control | Voltage
-|-
CPU Core & CPU Cache | -100.6 mV
Intel GPU & iGPU Unslice | -20.5 mV
System Agent | 0 mV
## Activate "Dolby Atmos Speaker System" driver after Windows 10 reinstallation
1. Uninstall existing driver by following this (copied from the README)
    1. Start Windows and logon with an administrator account.
    2. Right-click Windows logo on taskbar.
    3. Select Device Manager.
    4. Select 'Software components' category.
    5. Uninstall each of the following components.
        - Double-click the target component/device to launch Properties
        - Select 'Driver' tab -> 'Uninstall device'
        - Check 'Delete the driver software for this device', then click 'Uninstall'
        a. Dolby APO Software Device (HSA)
        b. Dolby APO SWC Device
        c. Fortemedia SAMSoft Effects Component
        d. Realtek Audio Effects Component
        e. Realtek Audio Universal Service
        f. Realtek Hardware Support Application
    6. Select 'Sound, video and game controllers' category.
    7. Double-click 'Realtek(R) Audio'.
    8. In Details tab, select 'Extended Infs' in the dropdown.
    9. Make sure to take note of the listed INFs.
    10. Uninstall 'Realtek(R) Audio'.
    11. Without refreshing the Device Manager or rebooting, open Command Prompt as Admin
        and uninstall each extension INF listed in step #9.
        Example:  pnputil /delete-driver oemXX.INF /uninstall /force
    12. Execute steps 8-11 for 'Intel(R) Smart Sound Technology (Intel(R) SST)'.
    13. Select 'System devices' category.
    14. Uninstall each the following devices in the same order.
        a. Detection Verification
        b. Intel(R) Smart Sound Technology (Intel(R) SST) OED
        c. Intel(R) Smart Sound Technology (Intel(R) SST) Audio Controller.
    15. Reboot system.
1. Reinstall the driver with the package from Lenovo website. If you want to be extra-sure, do so from an elevated command-line.
## Disable Intel adaptive brightness
Use this nice script: [DPST-Control](https://github.com/orev/dpst-control)

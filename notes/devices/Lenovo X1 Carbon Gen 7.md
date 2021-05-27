---
parent: Devices
---

# Lenovo X1 Carbon Gen 7

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

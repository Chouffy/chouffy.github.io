---
parent: Devices
---

# OnePlus

## TCPDump on OnePlus

OnePlus devices have *OnePlusLogKit* and can use it to have `tcpdump`:

1. Open `OnePlusLogKit` with `*#800#` > `oneplus Logkit`
1. Check `Network tcpdump log`
1. Check `save log`. It's unnecessary to reboot
1. Do your thing in Libratone app
1. Go back to `OnePlusLogKit`, uncheck all
1. Tap on `Copy logs to built-in SD card`
1. Wait for the message with path to recover log
1. Copy all logs somewhere and do some cleanup (logs are huge)
1. Open the `tcpdump` in Wireshark

## Camera & other apps

If the camera has trouble to focus in *Google Translate*, select *Camera 1* in app settings.

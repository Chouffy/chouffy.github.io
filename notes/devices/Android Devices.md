---
parent: Devices
---

# Android Devices

## Useful softwares

### Remote control from PC using [scrpy](https://github.com/Genymobile/scrcpy)

Useful keyboard shortcuts:

Keys | Usage
-|-
`ctrl` + mouse | Pinch to zoom
`mod` + `r` | Rotate screen


## Android Debug Bridge on WLAN

If it doesn't work, try in admin

```bash
adb tcpip 5555
adb connect 192.168.43.1:5555
```

## Reverse engineering

### Decompiling APK

[This blog post] has some good suggestions.

* [JADX](https://github.com/skylot/jadx) Dex to Java decompiler

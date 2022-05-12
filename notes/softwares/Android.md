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

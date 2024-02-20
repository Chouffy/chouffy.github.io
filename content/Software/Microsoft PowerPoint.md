---
aliases: PowerPoint
---
Is a presentation [[Software]], part of the [[Microsoft Office]] suite.
## Toolbar
* A great toolbar: [Instrumenta](https://github.com/iappyx/Instrumenta)
## Master slides
* Change default slide when creating new slide: put this slide as the 3rd item in the master view. [Source](https://superuser.com/questions/548038/change-default-slide-layout-in-powerpoint#637148)
## Configuration
- Avoid screen being switched from/to mirror and duplicate: Options → Advanced → Display section → Automatically extend display […]
## Export
### PNG export
See [this article](https://learn.microsoft.com/en-us/office/troubleshoot/powerpoint/change-export-slide-resolution)
- Go to `HKEY_CURRENT_USER\Software\Microsoft\Office\16.0\PowerPoint\Options`
- Add a `DWORD 32` named `ExportBitmapResolution`
- Select Decimal and set to `200`
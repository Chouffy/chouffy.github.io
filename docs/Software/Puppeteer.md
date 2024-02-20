Is an automated [[Web]] browser based on [[Chromium]] used to test [[Software]].

Links:
- [Homepage](https://pptr.dev/)
## Notes
### Load an Extension
- Extract the extension folder (`manifest.json` and others) from a current Chrome installation. Can be in `profile\Default\Extensions`
- Use the following `args` when launching Puppeteer

```json
'--load-extension=path/to/folder/that/manifest.json/resides',
'--disable-extensions-except=path/to/folder/that/manifest.json/resides'
```
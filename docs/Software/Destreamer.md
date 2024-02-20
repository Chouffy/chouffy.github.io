Is a [[Software]] to fetch [[videos]] from [[Microsoft Stream]]. It uses [[Puppeteer]] to fetch tokens.

Links:
- [GitHub](https://github.com/snobu/destreamer)
## Notes
### Change the browser
- Open `src/destreamer.ts` and `scr/TokenCache.ts` and change `executablePath: 'path\\to\\chrome.exe'`
	- `path\to\chrome.exe` can be found in `chrome://version`
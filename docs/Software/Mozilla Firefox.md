---
aliases:
  - Firefox
---
Is a [[Web]] [[Software]] navigator that run on all [[Operating System]]
[Link to pick version to download](https://www.mozilla.org/en-US/firefox/all/)
## Configuration
- Edit in `about:config`
	- Remove the `...` inside the address bar: `browser.urlbar.resultMenu.keyboardAccessible` to `false`
	- Do not close on last tab: `browser.tabs.closeWindowWithLastTab` to `false`
- Start an older version of Firefox with a "newer" profile: `firefox -allow-downgrade`
### Screenshots
- Tool available `CTRL+Shift+M` or in the Inspection → Responsive Design Mode 
- Device Pixel Ratio: multiplier of the resolution of the viewport, similar to `@2x` in [[Figma]] for instance
## Great extensions
* Enhancer for YouTube™
* Firefox Multi-Account Containers
* Firefox Translations
* History Cleaner
* Kee - Password Manager
* LeechBlock NG
* Print Edit WE
* Simple Translate
* Snap Links
* Temporary Containers
* uBlock Origin
* Video Speed Controller
* Web Archives
### Block "Sign-in with Google" pop-up
- Use uBlock Origins
- Add the following to my filters: `||accounts.google.com/gsi/iframe` - [Source](https://stackoverflow.com/questions/69004177/blocking-sign-in-with-google-iframes-using-ublock-origin)
### Image Compression Proxy
Use [Bandwidth Hero](https://bandwidth-hero.com/). Setup:
1. Deploy a Heroku instance of [Bandwidth Hero Proxy](https://github.com/ayastreb/bandwidth-hero-proxy)
    * Take note of the URL, the username and password if any
1. Install the browser extension like on [Firefox](https://addons.mozilla.org/en-US/firefox/addon/bandwidth-hero/).
    * On Firefox mobile, you need to use Firefox Nightly and [manually add the extension in a Collection](https://blog.mozilla.org/addons/2020/09/29/expanded-extension-support-in-firefox-for-android-nightly/).
1. Configure the *Data Compression Service* URL to `https://USERNAME:PASSWORD@host.heroku.com`
    * Otherwise you can have `401 error`
### Multi-Account Containers
#### Enabling [[Windows]] SSO in a container
1. Enable Windows SSO in Firefox settings
2. Get the container ID - this is available in `containers.json` in your Firefox profile directory, in a key called `userContextId` (`47001` for example)
3. In `about:config`, create a boolean key `network.http.windows-sso.container-enabled.CONTAINERID`, where `CONTAINERID` is from step 1. Set this key to `true`
4. Enjoy Windows SSO working in the given container!


---
parent: Softwares
---

# Internet

## Content

### Video & Media

* YouTube Converter / Download: [Y2mate.com](https://www.y2mate.com/)

### Image Compression Proxy

Use [Bandwidth Hero](https://bandwidth-hero.com/). Setup:

1. Deploy a Heroku instance of [Bandwidth Hero Proxy](https://github.com/ayastreb/bandwidth-hero-proxy)
    * Take note of the URL, the username and password if any
1. Install the browser extension like on [Firefox](https://addons.mozilla.org/en-US/firefox/addon/bandwidth-hero/).
    * On Firefox mobile, you need to use Firefox Nightly and [manually add the extension in a Collection](https://blog.mozilla.org/addons/2020/09/29/expanded-extension-support-in-firefox-for-android-nightly/).
1. Configure the *Data Compression Service* URL to `https://USERNAME:PASSWORD@host.heroku.com`
    * Otherwise you can have `401 error`

## DNS

* Reverse from IP to DNS: `nslookup IP`

## Firefox

Great extensions:

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

## Various Tools

* [Wi-Fi password to QR Code](https://qifi.org/)
    * Also works by creating a QR code that contains `WIFI:S:SSID;T:WPA;P:PASSWORD;;`
* [Find most active GitHub Fork](https://techgaun.github.io/active-forks/index.html)
* [Scrap AirBnb to find the best ones](https://github.com/digital-engineering/airbnb-scraper)

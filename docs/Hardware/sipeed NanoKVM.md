---
aliases:
  - NanoKVM
---
Is a [[KVM Switch]] for 1 computer made by [[sipeed]], that is quite low cost and accessible through [[Tailscale]]
## Links
- [Website](https://classic.sipeed.com/nanokvm)
- [Wiki](https://wiki.sipeed.com/hardware/en/kvm/NanoKVM/quick_start.html)
- [3D printed case](https://www.printables.com/model/1032391-sipeed-nanokvm-lite-case/files) for NanoKVM Lite
## Usage
- [Firmware](https://github.com/sipeed/NanoKVM/releases/latest)
- Default username/password: `admin/admin`
- [[Secure Shell Protocol|SSH]] default: `root/root`, but password change to the `admin` one after change
- Last partition to put ISO can be manually formatted in exFAT, if not done automatically
- When host is off, the [[sipeed NanoKVM|NanoKVM]] isn't accessible; so you can build a Y-split cable to transport power & data separately
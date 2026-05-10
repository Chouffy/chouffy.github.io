---
aliases:
  - USB
  - Thunderbolt
  - USB4
---
Is an [[computer]] interface.
## Notes
- VID = idVendor, PID = idProduct
- [USB Cheat Sheet](https://fabiensanglard.net/usbcheat/index.html): complete description
### Standards
According to [this Wikipedia page](<https://en.wikipedia.org/wiki/Host_controller_interface_(USB%2C_Firewire)>)
- [[Universal Serial Bus|USB]] 1.1: OHCI and UHCI
- [[Universal Serial Bus|USB]] 2.0: EHCI
- [[Universal Serial Bus|USB]] 3.0: xHCI
### Pinout ([source](https://www.aggsoft.com/usb-pinout-cable/usb2.htm))
![[Universal Serial Bus-1776245930346.webp|428]]
## USB4 / Thunderbolt
### Transfer files between computers
1. Connect both ([[Windows]]) computers with a Thunderbolt cable
2. Check that a network card appeared in both devices
3. Activate file sharing on the sender PC
4. Access the file share from the receiver PC
5. Use `robocopy` to move files efficiently: `robocopy /e "\\192.168.x.x\source" "C:/destination" /r:0`
## Power Split
- Use-case: keep a device on while the (data) host is off, like a [[sipeed NanoKVM|NanoKVM]]
- Few adapter exists to truly splits data and power
	- [Essence Engineering - USB-C PD power splitter](https://www.tindie.com/products/essenceeng/usb-c-pd-power-splitter/)
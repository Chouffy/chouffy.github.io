Is the programming board for the [[ESP32]] built around a [[FT2232HL]]
## Notes
- This board can be skipped if you buy a "Dev Board Socket Downloader" as they can contains the socket to house an [[ESP32]] and the required chip like [[CP2104]]
## Links
- Espressif:
	- [ESP-Prog Board introduction](https://docs.espressif.com/projects/esp-iot-solution/en/latest/hw-reference/ESP-Prog_guide.html)
	- [User Guide](https://docs.espressif.com/projects/esp-dev-kits/en/latest/other/esp-prog/user_guide.html)
## Pictures
- Overview
  ![[ESP-Prog-20250201220147677.webp]]  ^e99d79
  - Communication Interface Pinout
    ![[ESP-Prog-20250201220404994.webp|209]]
	- ESP_EN → EN
	- VDD → 3.3V
	- ESP_TXD → TXD0
	- GND → GND
	- ESP_RXD → RXD0
	- ESP_IO0 → IO0
- [[JTAG]] Pinout 
  ![[ESP-Prog-20250201220449635.webp|194]]
  - Functional diagram 
  ![[ESP-Prog-20250201220200954.webp]]
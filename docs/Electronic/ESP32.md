Is an [[Electronic]] board perfect for [[DIY project]] developed by [[Espressif]]
## Description
- Successor of the [[ESP8266]]
- Different boards: check the [module list](https://www.espressif.com/en/products/modules)
- Different versions
	- `WROOM`
	- `WROVER` 
		- [[ESP32-WROVER-E Datasheet.pdf|Datasheet ESP32-WROVER-(I)E]]
		- `ESP32-WROVER-E`: Internal network antenna
		- `ESP32-WROVER-IE`: External network antenna
			- `N16R8` with 16MB SPI flash, 8MB SPI PSRAM
			- `N4R8` with 4MB SPI flash
	- `ESP32-D0WDQ6`
	- 8 MB SPI PSRAM
## Usage
- Vcc = 3.3v
- Programmable via `ESP-PROG`
	- Vcc = 3.3v or 5v
	- Imax = 260mA - see [this](https://lastminuteengineers.com/esp32-sleep-modes-power-consumption/)
	- [Reference guide from Expressif](https://docs.espressif.com/projects/esp-iot-solution/en/latest/hw-reference/ESP-Prog_guide.html)
	- See [ESP32-With-ESP-PROG-Demo - GitHub](https://github.com/PBearson/ESP32-With-ESP-PROG-Demo)

## Arduino environment
This board can run [[docs/Software/Arduino|Arduino]] code - see the [online documentation](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
### Setup
1. Download the [Arduino IDE](https://www.arduino.cc/en/software)
2. In the IDE, Preferences → Additional Boards, add the [Arduino core for the ESP32](https://github.com/espressif/arduino-esp32): `https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json`
3. Plug-in the board and install the [USB to UART drivers](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads)
4. In the IDE, select Tools → Board → ESP32 → ESP32 Dev Module
5. In the IDE, select Tools → Port → the proper COM module
6. Load an [example](https://github.com/espressif/arduino-esp32/tree/master/libraries), like `WifiScan`
### Libraries
#### HTTPS POST
Use the `WifiClientSecure` library - Link: [ESP32 HTTPS Requests (Arduino IDE) - Random Nerd Tutorials](https://randomnerdtutorials.com/esp32-https-requests/)
## Ressources
- [Random Nerd Tutorials - Getting Started with the ESP32 Development Board](https://randomnerdtutorials.com/getting-started-with-esp32/)
- [Random Nerd Tutorials - Installing the ESP32 Board in Arduino IDE](https://randomnerdtutorials.com/installing-the-esp32-board-in-arduino-ide-windows-instructions/) including Troubleshooting step

## Hardware
### Datasheet
See [[esp32_datasheet_en.pdf]]
### Pinout
Mine: `ESP32-WROOM-32D`
See also [ESP32 Pinout Reference - Random Nerd Tutorials](https://randomnerdtutorials.com/esp32-pinout-reference-gpios/)

![[H4bf91d4144504f6e84f360e9286d5227J.webp|426]]![[Hdf8d371debe445b284bba21af4744865S.webp|422]]

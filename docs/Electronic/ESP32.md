Is an [[Electronic]] board perfect for [[DIY project]] developed by [[Espressif]]
## Description
It's the successor of the [[ESP8266]]
### Datasheet
See [[esp32_datasheet_en.pdf]]
### Pinout
Mine: `ESP32-WROOM-32D`
See also [ESP32 Pinout Reference - Random Nerd Tutorials](https://randomnerdtutorials.com/esp32-pinout-reference-gpios/)

![[H4bf91d4144504f6e84f360e9286d5227J.webp]]![[Hdf8d371debe445b284bba21af4744865S.webp]]
## Arduino environment
This board can run [[3 - Resources/Electronic/Arduino]] code - see the [online documentation](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
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

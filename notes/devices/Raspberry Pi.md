---
parent: Devices
---

# Raspberry Pi

## GPIO

Pinout on Raspberry 1 B and following are the same, save for the less pins.

### I2C Development

#### Setup

1. Activate I2C in `raspi-config`
1. Install `sudo apt install i2c-tools` and add current user to i2c group `sudo adduser $USER i2c`
1. Reboot
1. Test if I2C device is found `sudo i2cdetect -y 1`

[Source](https://www.instructables.com/Raspberry-Pi-I2C-Python/)

#### AHT20 Temperature & Humidity sensor

* [How to connect this I2C sensor to the Raspberry Pi](https://learn.adafruit.com/adafruit-aht20/python-circuitpython)
* How to use it with Python
    1. `sudo apt-get install python-smbus`

## Network

### USB WLAN / Wifi network interface

 The `EW-7811Un 802.11n Wireless Adapter` is a `Realtek RTL8188CUS`

### Bridge LAN client to an Access Point

[Follow this great & complete guide here](https://www.nerd-quickies.net/2019/08/20/setup-lan-wlan-bridge-with-openwrt-luci/).

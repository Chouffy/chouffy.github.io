---
parent: Devices
---

# Raspberry Pi

## GPIO

Pinout on Raspberry 1 model B rev 2 and following are the same, save for the fewer pins.

### I2C Development

[I2C introduction](https://www.abelectronics.co.uk/kb/article/1090/i2c-part-1---introducing-i2c)

#### Setup

1. Activate I2C in `raspi-config`
1. Install `sudo apt install i2c-tools` and add current user to i2c group `sudo adduser $USER i2c`
1. Reboot
1. Test if I2C device is found `sudo i2cdetect -y 1`

[Source](https://www.abelectronics.co.uk/kb/article/1/i2c-part-2---enabling-i-c-on-the-raspberry-pi)

#### Usage

* [Programming I2C with Python](https://www.abelectronics.co.uk/kb/article/1094/i2c-part-4---programming-i-c-with-python)
* Use hexadecimal (start with `0xF`) or binary (`0b1111`)
* Setup
    1. `sudo apt install python3-pip python3-smbus`
    1. `pip3 install smbus2`
    1. Then usage:

        ```python
        from smbus2 import SMBus
        i2c_bus = SMBus(1)  # Create a new I2C bus on bus 1
        data_read = i2c_bus.read_i2c_block_data(I2C_ADDR, 0x0, 1)
        i2c_bus.write_i2c_block_data(I2C_ADDR, 0x0 , I2C_COMMAND)
        ```

* Documentation:
    * [smbus2](https://smbus2.readthedocs.io/en/latest/index.html)
    * [A simple read example](https://github.com/DcubeTechVentures/HIH6130/blob/master/Python/HIH6130.py)

## Network

### USB WLAN / Wi-Fi network interface

* The `EW-7811Un 802.11n Wireless Adapter` is a `Realtek RTL8188CUS`

### Use the Raspberry Pi as a router, wireless access point, ...

* Install [OpenWrt](https://openwrt.org/toh/raspberry_pi_foundation/raspberry_pi), it's much more convenient
* To use a tethered smartphone, install [corresponding modules](https://openwrt.org/docs/guide-user/network/wan/smartphone.usb.tethering)
    * To download them by hand, check the URLs in the "Software" page of the Open-WRT installation

## SD Card

* Migrate to smaller SD Card
    1. Backup
    1. Use a Linux host to resize the partition
    1. Make an image and restore it to target SD

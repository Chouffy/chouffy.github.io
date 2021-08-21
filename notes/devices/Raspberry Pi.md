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
* To do a (guest) hotspot, [follow this script](https://github.com/f1linux/pi-ap)
    * Check `sudo systemctl status hostapd.service`, `wpa_supplicant.service` and `dnsmasq.service` if you have troubles
    * If error with `hostapd`: unmask the service, or `rfkill unblock wlan` and then `rfkill list wlan` to check
    * If error with `dnsmasq.service:`: check configuration `sudo nano /etc/dnsmasq.conf`, last line should look like `dhcp-option=6,1.1.1.2,1.0.0.2` and not have a `,` at the end

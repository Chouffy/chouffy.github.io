---
parent: Server Softwares
---

# Home Assistant

## Setup on KVM Ubuntu

1. Download the image [here](https://www.home-assistant.io/installation/linux)
1. Decompress `xz --decompress FILE`
1. Move somewhere you like `/var/lib/libvirt/images/hassos.qcow2`
1. Create the VM `sudo virt-install --name hassos --graphics vnc,listen=0.0.0.0 --memory=2048 --vcpus=2 --disk=/var/lib/libvirt/images/hassos.qcow2,format=qcow2 --boot uefi --import --os-variant=debian9 --network=bridge=br0`
1. Login in http://homeassistant.local:8123

## Development

* Home Assistant Developers wiki
    * [HA Architecture](https://developers.home-assistant.io/docs/architecture_index)
    * [Entities Architecture](https://developers.home-assistant.io/docs/architecture/devices-and-services)

### Setup

* Follow [setup guide here](https://developers.home-assistant.io/docs/development_environment/)
* Then [don't forget to checkout a seperate branch](https://developers.home-assistant.io/docs/development_submitting)
* Start Home Assistant `hass -c config`

## Research specific to Libratone Zipp

* Entity to use: [Media Player](https://developers.home-assistant.io/docs/core/entity/media-player)
* Example of an implementation: [Harman Kardon AVR integration](https://www.home-assistant.io/integrations/harman_kardon_avr/)
    * Use [this module](https://github.com/Devqon/hkavr)
* [Command lists](https://www.loxwiki.eu/display/LOX/Libratone+Zipp+WLan+Lautsprecher)
    * Made and described in [this blog post](https://benjaminhanke.de/baublog/technik/libratone-zipp-wlan-lautsprecher-in-loxone-einbinden/)

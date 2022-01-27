---
parent: Server Softwares
---

# Home Assistant

## Setup

### Ubuntu KVM

1. Download the image [here](https://www.home-assistant.io/installation/linux)
1. Decompress `xz --decompress FILE`
1. Move somewhere you like `/var/lib/libvirt/images/hassos.qcow2`
1. Create the VM `sudo virt-install --name hassos --graphics vnc,listen=0.0.0.0 --memory=2048 --vcpus=2 --disk=/var/lib/libvirt/images/hassos.qcow2,format=qcow2 --boot uefi --import --os-variant=debian9 --network=bridge=br0`
1. Login in http://homeassistant.local:8123

### HTTPS Setup

1. Install [Let's Encrypt add-on](https://github.com/home-assistant/addons/blob/master/letsencrypt/DOCS.md) and follow the documentation
1. Go to Configuration > General and define *External URL* and *Internal URL*
1. Configure `configuration.yaml`

    ```yaml
    http:
        ssl_certificate: /ssl/fullchain.pem
        ssl_key: /ssl/privkey.pem
    ```

1. Restart the server

## Configuration

### Lovelace

* Display an entity attribute:

```yaml
type: entities
entities:
  - type: attribute
    entity: media_player.abc
    attribute: sound_mode
```

## Development

### Documentation

* Home Assistant Developers wiki
    * [HA Architecture](https://developers.home-assistant.io/docs/architecture_index)
    * [Entities Architecture](https://developers.home-assistant.io/docs/architecture/devices-and-services)
    * [Creating your 1st component](https://developers.home-assistant.io/docs/creating_component_index)
    * [Validate (custom) components with Hassfest](https://developers.home-assistant.io/blog/2020/04/16/hassfest/)
* HACS - Home Assistant Community Store
    * [View current published repo](https://hacs-repositories.web.app/)
    * [Install HACS](https://hacs.xyz/docs/installation/prerequisites/)
    * [Add a custom repo](https://hacs.xyz/docs/faq/custom_repositories)
* Ressources
    * [Repository of examples](https://github.com/home-assistant/example-custom-config/tree/master/custom_components/)
    * Icons: [Material Design Icons](https://materialdesignicons.com/) - use it like `mdi:home`

### Dev Setup

* Follow [setup guide here](https://developers.home-assistant.io/docs/development_environment/)
* Then [don't forget to check out a separate branch](https://developers.home-assistant.io/docs/development_submitting)
* Start Home Assistant `hass -c config`

### More verbose log

Add the following to your `configuration.yaml`, according to [logger integration doc](https://www.home-assistant.io/integrations/logger/).

```yaml
logger:
  default: info
```
---
aliases:
  - ZHA
---
Is the [[Zigbee]] implementation used in [[Home Assistant]]
## Setup
- Through [[Home Assistant]] with a compatible device, such as the SkyConnect
- [Integration documentation](https://www.home-assistant.io/integrations/zha/)
## Quirks
- Are on-the-fly modifications for devices that don't follow the Zigbee specification
- Can be thought of as "converter" or "device handler"
### Setup quirks
- [Source](https://community.home-assistant.io/t/how-to-setup-local-zha-quirks/341226/6)
- Go to or create `/zha_quirks`
- Create a file `devicemodelzyz_devicetypexyz.py` and put the quirk
- First-time setup in `configuration.yaml`
```yaml
zha:
     enable_quirks: true
     custom_quirks_path: /config/zha_quirks/
```
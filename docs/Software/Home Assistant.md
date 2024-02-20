Is an [[Home automation]] [[Software|platform]], runs on [[Python]]
## Setup
### [[Proxmox]]
- This scrip helps to set up a VM: `bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/vm/haos-vm.sh)"`
### [[Raspberry Pi]]
- Raspberry Pi 2 images are still present in GitHub [releases](https://github.com/pajikos/sms-gammu-gateway)
### [[Ubuntu]] [[Kernel-based Virtual Machine|KVM]]
1. Download the image [here](https://www.home-assistant.io/installation/linux)
1. Decompress `xz --decompress FILE`
1. Move somewhere like `/var/lib/libvirt/images/hassos.qcow2`
1. Create the VM `sudo virt-install --name hassos --graphics vnc,listen=0.0.0.0 --memory=2048 --vcpus=2 --disk=/var/lib/libvirt/images/hassos.qcow2,format=qcow2 --boot uefi --import --os-variant=debian9 --network=bridge=br0`
1. Login in http://homeassistant.local:8123
### [[TrueNAS SCALE]]
[Source](https://community.home-assistant.io/t/alternative-way-of-running-hassos-full-os-on-freenas-without-iocage-or-docker/133738)
1. Download the image [here](https://www.home-assistant.io/installation/linux)
2. Unzip it
3. Convert the image using [[VirtualBox]]: `VBoxManage clonehd source/hassos_vm.vdi destination/hassos_vm.img --format raw`
4. Copy the image to TrueNAS
5. Create a `zvol` with ≥ 32 Gb
6. Create a [[Virtualization|VM]]
	- Navigate to Virtual Machines add Virtual Machine (VM)
	- Set Guest OS as Linux and Boot Method as UEFI
	- Add number of Virtual CPUs and Memory size accessible to the VM (this can be modified later)
	- Select Use existing disk image and select the Zvol created above
	- Modify Network Adapter if needed (ie. in order to easily locate the NIC when router leases its IP)
	- Don’t add installation image
7. Burn the image to the `zvol`: `dd if=/mnt/pool_name/dataset_name/location_of_hassos_vm/hassos_vm.img of=/dev/zvol/pool_name/zvol_name`
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
### Migrate to another server
1. Set up the new Home Assistant server
1. In the old one, go to backups and do a full one
1. In the new one, import before creating a user (OS) or copy backup in `/config/`
### Enable reverse proxy like Cloudflared
Set up the [HTTP Integration](https://www.home-assistant.io/integrations/http#reverse-proxies).
### [[Short Messaging Service|SMS]] Gateway via 3G/4G USB Modem Stick
- Official [SMS integration](https://www.home-assistant.io/integrations/sms/) which uses [[Gammu]]
	- Device to use
		- Check `ls /dev/*USB*` 
		- [This post](https://community.home-assistant.io/t/send-sms-with-usb-gsm-modem-when-alarm-triggered/28942/438) suggested to use `/dev/serial/by-id/usb-Technology_Mobile_FFFFFFFFFFFFFFFF-if01-port0`
		- If you use [[Kernel-based Virtual Machine|KVM]], make sure to passthrough [[Universal Serial Bus|USB]] with EHCI controller
	- Send an SMS via the service: 
	- Receive SMS via the Event `sms.incoming_sms`
		- ⚠️ Listening to the event make the integration to switch to `Unavailable`
- I used [[Huawei E3272]] that needed to be reflashed to work with
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
### Mobile app
* Reinstall the mobile app on a reset phone - [source](https://community.home-assistant.io/t/correct-way-to-reset-app-and-start-over/138122/2)
    1. remove app from phone
    1. remove integration in HA via the UI
    1. redownload app and do onboarding
    1. after onboarding restart HA and keep your app alive (so screen on)
### Integrations
#### Calendar from Nextcloud
* Useful to silence notification: just use a calendar to set "Silence" days
* [Relevant integration page](https://www.home-assistant.io/integrations/caldav/)
* Events must have a name
* Configuration to show full days:
    ```yaml
    calendar:
    - platform: caldav
        username: nextcloud_username
        password: nextcloud_pass
        url: https://nextcloud.com
        custom_calendars:
        - name: "Name for HA"
            calendar: "Nextcloud Name"
            search: ".*"
    ```
#### Send [[Secure Shell Protocol|SSH]] commands
[Guide](https://community.home-assistant.io/t/sshing-from-a-command-line-sensor-or-shell-command/258731)
- Setup [[Secure Shell Protocol#Create keys|SSH keys for passwordless authentication]]
- Store the keys
	- NOT in `~/.ssh/` as it's not shared across containers
	- In `/config/.ssh/` so it get preserved across updates
- Set the known host in `/config/.ssh/` for the same reason than keys
- Call the command with `ssh HOST_CLIENT@HOST_IP -i /config/.ssh/HOST_privkey -o UserKnownHostsFile=/config/.ssh/HOST_known_hosts 'command'`
	- `-i` to specify the private key (without `.pub`)
	- `-o UserKnownHostsFile=/config/.ssh/HOST_known_hosts` to approve the hos
		- If inexistent, it will be populated
- This can be used in [Command Line integration](https://www.home-assistant.io/integrations/command_line/) or [Shell Command integration](https://www.home-assistant.io/integrations/shell_command/)
#### Receive sensors data from other systems
- [Webhooks Template sensors](https://www.home-assistant.io/integrations/template/#trigger-based-sensor-and-binary-sensor-storing-webhook-information) can be set
	```yml
	template:
	  - trigger:
		  - platform: webhook
			webhook_id: my-super-secret-webhook-id
			allowed_methods:
			- POST
			local_only: true
		sensor:
		  - name: "Webhook Temperature"
			state: "{{ trigger.json.temperature }}"
			unit_of_measurement: °C
	```
- A device can do a POST 
### Automations
#### Notifications
* [Build Actionable notification](https://companion.home-assistant.io/docs/notifications/actionable-notifications/)
* Get an attribute value with a space: use `{{ states.sensor.abc.attributes["X Y Z"] }}`
* Use Developer Tools → Services and Template to try out
### Statistics
- [How to fix statistic data - Forum post](https://community.home-assistant.io/t/how-to-fix-statistics-data-e-g-energy-data/360966)
### Templates
"allows creating entities which derive their values from other data."
- [Templating documentation](https://www.home-assistant.io/docs/configuration/templating/)
- [Integration documentation](https://www.home-assistant.io/integrations/template)
## Development
### Verbose logging
- The [Logger integration](https://www.home-assistant.io/integrations/logger/) can help understanding what's going on in [[Home Assistant]] or a custom component
- The [Log Viewer Add-on](https://github.com/hassio-addons/addon-log-viewer) can helps to monitor logs in realtime
### Debugger
- The [debugpy integration](https://www.home-assistant.io/integrations/debugpy/) can connect to a [[Visual Studio Code]] instance remotely to see what's going on
- You need to clone the [Home Assistant Core](https://github.com/home-assistant/core) first to the used [[Visual Studio Code|VSC]] folder
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
    * Unit of Measurement list - [const.py](https://github.com/home-assistant/core/blob/dev/homeassistant/const.py)
### Dev Setup
* Follow [setup guide here](https://developers.home-assistant.io/docs/development_environment/)
    1. Install Docker - [Guide for Ubuntu](https://docs.docker.com/engine/install/ubuntu/) and don't forget to give right `sudo usermod -a -G docker $USER`
    1. Install Git `sudo apt install git -y`
    1. Install Visual Studio Code: [snap](https://snapcraft.io/code) or `sudo snap install code --classic`
* Then [don't forget to check out a separate branch](https://developers.home-assistant.io/docs/development_submitting)
* Start Home Assistant `hass -c config`
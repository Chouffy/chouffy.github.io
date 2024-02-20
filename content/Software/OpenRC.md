Is an [[init system]] used in [[Linux]] distro such as [[Alpine Linux]]
## Monitoring
- `rc-status` to check status of all services
- `rc-service --list` to view all available services
## Management
### Add a service
- Edit a new file in `/etc/init.d/` 
	- Use [OpenRC generator](http://openrc.run/) to convert a [[systemd]] file
- `rc-update add {service-name} {run-level-name}`
	- `rc-update add apache2 default` to start `apache2` at boot
- `rc-service {service-name} start`
### Restart a service
- `rc-service {service-name} restart`
### Remove a service
- `rc-update del {service-name-here}`
- `rc-service {service-name} stop`
## Ressources
- [How to enable and start services on Alpine Linux - Cyberciti](https://www.cyberciti.biz/faq/how-to-enable-and-start-services-on-alpine-linux/)
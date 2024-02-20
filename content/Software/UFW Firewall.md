---
aliases: ufw
---
Is a [[simplewall]] for [[Linux]] systems
## Setup
* A good tutorial [here](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-22-04)
* Install `sudo apt install ufw`
* Configuration
    * Check status & list configuration `sudo ufw status`
    * Set default incoming to deny `ufw default deny incoming` and `ufw default allow outgoing` for instance
* Allow something
    * Allow a port `sudo ufw allow PORT`
    * Allow a port from specific source `sudo ufw allow from 192.168.0.0/24 to any port YYY`
	    * and a protocol `… to any port 100:200 proto tcp`
    * Rate limit a port (>6 connections within 30 sec) `sudo ufw limit PORT`
    * `PORT` can be replaced with a known app like `SSH` or specific protocol like `PORT/tcp`
* Remove something
    * Remove an allowance `sudo ufw delete allow PORT` or `sudo ufw delete RULE_NUMBER`
* Enable
    * Enable `sudo ufw enable`
    * On alpine `rc-update add ufw default`
* Verify
    * Check added rules `sudo ufw show added`
    * Check existing rules with numbers `sudo ufw status numbered`
---
aliases:
  - PuTTY
---
Is a console [[Software]] that runs on [[Windows]] and which allows you to connect to [[Secure Shell Protocol]], [[Serial]], [[Telnet]] and [[Android]]'s [[Android Debug Bridge]].
## Setup tips
* In Window → Appearance, Use `Lucida Console` instead of `Courrier`
* In Connection → Data:
    * Define an auto-login username
    * Define a command, like an auto `screen` start: `screen -q && read -n1 -r -p "Press any key to exit, or Ctrl+C to continue." && exit`
### Fix screen output
In the setting for a connection, go to :
* *Window > Appearance*, Change font to *Lucida Console*
* *Window > Translation*, Change remote character set to *ISO-8859-1:1998 (Latin-1, West Europe)* ... but this will break other softwares.
### Port Forwarding
1. In the setting for a connection, to go to *Connection* → *SSH* → *Tunnels*
1. Add the port you want to forward:
    * Source port: the client port you want to listen to
    * Destination: the port on the target you want to be connected to

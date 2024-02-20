Some [[Linux]] scripts to do [[Web]] stuffs.
## DynamicDNS with OVH

* [OVH DynHost help page](https://docs.ovh.com/us/en/domains/hosting_dynhost/#step-1-create-a-dynhost-username)
    * Note that IP may not be passed in the URL!
* Script `/usr/sbin/ncddns.sh`

    ```bash
    #!/bin/bash
    # Output to a logfile
    exec &> /home/ncbackup/DDNS/"$(date '+%Y-%m-%d %T').txt"
    echo "Starting DDNS update ..."

    curl -i -H "Authorization: Basic hjkhjkhjkhjkhjk=" ""https://www.ovh.com/nic/update?system=dyndns'&'hostname=example.com""

    # Remove logs older than 14 days
    find /home/ncbackup/DDNS -mtime +14 -type f -delete
    echo "Removed old logs"
    ```
    
    * and then usual stuff like other scripts, using `ncbackup` user

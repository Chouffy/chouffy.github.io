Is a [[Software]] that runs [[PHP]], useful for [[Web]] apps like [[Wordpress]].
## Usage
- Locations in [[Ubuntu]]
	- Sites configuration in `/etc/apache2/sites-available/`
	- Data in `/var/www/<website>`
## Setup
### Useful Commands
- `systemctl reload apache2` to restart Apache
- Site configuration
	- `a2ensite` to enable a `.conf` in site configuration
	- `a2dissite` to disable
### Fix permalinks in [[Wordpress]]
- Edit `/etc/apache2/apache2.conf` to have:
```conf
<Directory /var/www/>
	Options Indexes FollowSymLinks
	AllowOverride All
	Require all granted
</Directory>
```
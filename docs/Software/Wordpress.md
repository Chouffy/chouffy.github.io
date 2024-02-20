Is a [[Content Management System]] used to power a lot of [[Web|websites]].
## Setup
- This [guide](https://www.digitalocean.com/community/tutorials/how-to-install-wordpress-on-ubuntu-22-04-with-a-lamp-stack) provide a setup in a local Linux PC 
- To debug [[Wordpress]], you can use [[Visual Studio Code]] coupled with [PHP Debug](https://marketplace.visualstudio.com/items?itemName=xdebug.php-debug) and [Xdebug](https://xdebug.org/wizard). Then configure a run, and start the debugger.
## Frontend
- A [[RSS]] feed can be hidden in `website.com/news/feed/`
	- `news` is the root of the site where news appear
## Backend
- Admin panel is accessible via `/wp-admin`
	- If you are logged in, you'll see a top bar
- Delete all plugins, pages, posts created automatically
- General settings contain title & tagline
### Plugins
To be checked:
- `All-in-One WP Migration` to backup website
- `Starter Templates` to build page
#### Elementor
Is a page builder for [[WordPress]] - Similar to [[WordPress Block Editor]]

Notes:
- Background overlay available in the section menu to darken an image a bit
- Use the S to add pre-defined blocks
### Theme
- Theme can be customized (including font, menu, …)
- Pictures to be used can be found in [[Stock Photography]]
### System
- Change maximum upload
	- Edit `/usr/local/etc/php/php.ini`
```ini
file_uploads = On
memory_limit = 500M
upload_max_filesize = 500M
post_max_size = 500M
max_execution_time = 600
```
## Ressources
-  [How To Make a WordPress Website - 2023 - YouTube](https://www.youtube.com/watch?v=jl8F4WglM3I)
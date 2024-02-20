---
aliases: crontab
---
Is a job scheduler [[Software]] on [[Linux]] systems using a [special format](https://pkg.go.dev/github.com/robfig/cron@v1.2.0#hdr-CRON_Expression_Format)
## Notes
* Edit cron of a user `sudo crontab -e -u USER` (`-u` to edit specific user)
* Check if the cron expression is correct: [crontab guru](https://crontab.guru/)
* Use in cooperation with [[Sudo|Visudo]] to execute a task as root
### Particular 
* ⚠️ Be careful that some `cron` expression are in **6 digits**, the left one being the seconds
* `@reboot COMMAND` to execute a job at boot

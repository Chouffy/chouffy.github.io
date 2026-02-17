Is a [[docs/How-To/index|How-To]] mount a [[Virtualization|virtualized]] [[Hard Disk Drive]] (like `vhd` or `vhdx`) at [[Windows]] start-up.
1. Create a Task in the Task Scheduler
	1. Trigger: at system startup
	2. Action: launch a program
		1. Program: `PowerShell`
		2. Arguments: `Mount-DiskImage -ImagePath 'C:\Data\Datadisk.vhdx'`
	3. Security options
		1. User: local user
		2. *Run whether user is logged on or not*
		3. Run with highest privileges
	4. Conditions: uncheck all
	5. Settings: uncheck all, do not start a new instance
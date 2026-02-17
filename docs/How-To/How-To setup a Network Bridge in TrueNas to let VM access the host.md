This is a [[docs/How-To/index|How-To]] create a [[network]] bridge in [[TrueNAS]] so [[Virtualization|Virtual Machine]] can ping the host. [The source is here.](https://www.youtube.com/watch?v=uPkoeWUfiHU)
1. Stop all apps, containers, VMs
2. In the Network settings of TrueNas
	1. Define a static IP on the adapter and test it
	2. Create a bridge (like `br0`), with the static IP in it and the interface selected and test it
3. Remap all apps, containers, VMs to the new bridge
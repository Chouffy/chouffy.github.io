Is a [[file system]] used in [[Linux]], notably for onboard computers and low ressources things.
## Usage
- Create an archive: `mksquashfs tmp/ archive.tcz`
	- Be careful to have an empty file, otherwise existing and new files will be merged
- Mount: ![[fstab#SquashFS]]
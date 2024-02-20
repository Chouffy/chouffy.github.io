Is a [[Linux]] [[Software]] to convert & copy files
## Transfer between two PC
`dd` can be piped with `ssh`: `dd if=/path/to/file bs=8192 status=progress | ssh user@target 'dd of=/path/to/target bs=8192'`
---
aliases: Linux Shell, Linux Shell Scrips, SH
---
Is a [[shell]] and [[programming language]] for [[Linux]].
See also [[PowerShell]]
## Commands & Examples
- `# Comments` 
- `&&` to combine commands
- `;` to combine commands even if the previous one fail
### File & Data
#### Check if file exists
```sh
#!/bin/bash
if [ -e x.txt ]
then
    echo "ok"
else
    echo "nok"
fi

```
### Time
#### Wait N seconds
`sleep 10` to wait 10 seconds
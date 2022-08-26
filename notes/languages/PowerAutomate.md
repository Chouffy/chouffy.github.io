---
parent: Languages
---

# Power Automate

## Expression

### Length

* Cannot accept `null` values

### Equals

* Return a boolean (`True` or `False`)
* Can test against `null`

## Control (logic)

### Condition (if)

* Boolean must be converted to string to be used. Case-sensitive, so use `True`

### Case

* Accepts only String, Integer

## SharePoint

### When a file is created or modified (properties only)

Parameter | Value
-|-
Limit Columns by View | Only use columns defined in a view. Other columns won't be accessible. But the flow is still triggered!

Dynamic content | Value
-|-
ID | Numeric ID of the file
Identifier | ID to *select* the file (copy, ...)
Folder path | Folder path like `foo/bar/`. Note the slashes
*custom column* | Return content, otherwise null

### Copy file

Parameter | Value
-|-
File to Copy | `Identifier` retrieved above
Destination Folder | Folder path like `/foo/bar`. Note the slashes!

---
aliases:
  - JDE
  - JDK
---
Is a [[Software]] that enable the [[Java]] [[programming language]] to run on multiple platform like [[Windows]], [[Linux]] or [[Android]].
## Setup
### Windows Portable
- Can be downloaded [here](https://adoptium.net/download/)
	- Most used: Windows, x64, JDK, latest version
- To check installed version: `java -version`
- Usage
	- To use it with any software, launch the software with a [[Batch]] that specify the `%PATH%` of the Java installation: `set PATH=%PATH%;c:\whatever\else`
	- Or open a `jar`: `.\OpenJDK\bin\javaw.exe -jar "PathToJar"`

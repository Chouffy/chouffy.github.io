---
parent: Languages
---

# Python

## Organization

### General

Text|Action
-|-
`#` | Comment, sinlge line
\`\`\` | Comment, multiple lines
`var x` | Declare a new var, any type
`x = name.fctA(par)` | Populate var x with the function
`from math import *` | Import every module from *math*

#### Text

Text|Action
-|-
`"x\nhey"` or `"x\hey"` | new line between x and hey
[Link](https://python-reference.readthedocs.io/en/latest/docs/str/escapes.html) | Escape characters list

### List

Text|Action
-|-
`list = [a, b, c]` | Declare a list "list" with variables a b c, can be any type
`list = [[a,b][c,d]`| 

#### Access

Text|Action
-|-
`list[0]` | access item 0 (is "a")
`list[-1]` | access last item (is "c")
`list[0:1]` | sub-list from 0 to 1

#### Work with List

Text|Action
-|-
`list.extend(list2)` | add list2 after list -> `list, list2`
`list.append(list2)` | add list2 as sub-list in list -> `list, [list2]`
`list.insert(position, item)` | insert
`list.remove(item)` | remove
`list.clear()` | remove all items
`list.pop()` | remove last item
`list.copy()` | copy item
`list.sort()` | sort the list by a-z, 0-9
`list.reverse()` | inverse of sort

#### Search

Text|Action
-|-
`list.index(name)` | search in list for "name"
`list.count(item)` | count items

### Dictionnary

Key:Value pairs

#### Single dimension

Text|Action
-|-
`dict = {key:work, k1:w1}` | declare
`dict['key']` or `dict.get('key')` | get
`dict.get('key', "default value")` | get with fallback

#### Multiple dimensions

Text|Action
-|-
`dict = { k1:{k11:w, k12:w},`<br>`k2:{k21:w, k22:w}}` | declare
`dict[0][1] -> k12`<br>`dict[0]['k12']`<br>`dict['k1']['k12']` | access

### Tuples

Like List but immutable

* `x = (4, 5)`
* `x = ([1,2],[3,4])`

### Modules management

* `pip install x`
* `pip uninstall x`

## Loops

Operators: `<,<=, ==, !=, =>, >`

### If

```python
var = Trues
if var:
    if char in text:
        do things
    elif var1 or not(var2) or var3 > var 4:
        do things
else:
   do thing
```

### While

```python
i = 1
while i<10:
    i+=1
```

### For

Good for index!

```python
for item in items:          # Go through all items
    do something with item  # item is one of the items
for item in [a, b]:         # same with 2 items
for item in string:         # same with string - treat is char
```

### Try

```python
try:
    do things
except ValueError:
    do things               # If ValueError is raised
except ValueError as err:
    print(err)              # print err being the rrror
except:
    do things               # If any error is raised
```

## Functions

### Text

Is an index

#### Retrieve

```python
a = input("str")            # Ask for input with message "str", put in a
```

#### Transformations

```python
x.index("a")                # return start index of string/char
x.replace("old", "new")     # replace in x "old" by "new"
```

### Numbers

Text|Action
-|-
`str(x)` | int to str
`int(x)` or `float(x)` | str to int or float

### Files

Text|Action
-|-
`a = open("f.txt", "r+")` | open the file in:<br>r+ - read & write><br>r - read<br>w - write<br>a - append
`a.close()` | close
`a.readable()` | bool to check if Read possible
`a.readlines()` | read each lines in array [line1, lineN]
`a.write("text")` | Mode "w": overwrite the file with text<br>Mode "a": append text at end of file

## Classes & Objects

### Definition

```python
class ClassName:	
    def __init__(self, a, b):   # a b are used for initialization
        self.a  = a
        self.a  = a
    def function(self):	
        return a
```

### Usage

```python
from filename import ClassName
object = ClassName("a", "b")
print(object.a)
```

### Inheritance

```python
from filename import ClassName

class Child(Parent):

    def fct(self):
        do things

    def overridenFct(self):
        do things
```

## XML

### Structure

```xml
<tag>Text content</tag>
<tag attribute1="something1 something2"/>
```

### In Python

Text|Action
-|-
`data.find('key').text` | get the Text content
`data.find('key').get('attribute1')` | get the Attribute content

## JSON

```python
import json	
data = "{ 'k1': 'w1' }"         # JSON string
dictData = json.loads(data)     # load a JSON string in dictData
print(dictData['k1'])           # print content of k1
```
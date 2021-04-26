---
parent: Languages
---

# Python
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Setup

* PC: check [Python website](https://www.python.org/)
* Raspberry Pi OS: `sudo apt install python3-pip` for Python 3

## Organization

### General

Text|Action
-|-
`#` | Comment, sinlge line
\`\`\` | Comment, multiple lines
`var x` | Declare a new var, any type
`var _x` | Private variable
`x = name.fctA(par)` | Populate var x with the function
`from math import *` | Import every module from *math*

#### Numbers

* `123` is integer
* `123.0` is float

#### Decimal

* Integer to Decimal: `bin(int)` but remove leading 0
* Advanced: use `format()` - [documentation](https://docs.python.org/2/library/string.html#format-specification-mini-language)
    * Example: `format(14, '#010b')` to output `'0b00001110'`
    * _The # makes the format include the 0b prefix, and the 010 size formats the output to fit in 10 characters width, with 0 padding; 2 characters for the 0b prefix, the other 8 for the binary digits._ ([Source](https://stackoverflow.com/questions/16926130/convert-to-binary-and-keep-leading-zeros-in-python))
* How to manage bitmasks = work with one bit - [Source](https://realpython.com/python-bitwise-operators/#bitmasks)
    * Get a bit by shifting everything to the right
        ```python
        def get_normalized_bit(value, bit_index):
            return (value >> bit_index) & 1
        ```

#### Text

Text|Action
-|-
`print(x)` | Print text in `x`
`print(x, end =",")` | Print text in x and finish by ","
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

### Switch

Does not exist in Python, so needs to use If.

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

## Package application

[Tutorial](https://packaging.python.org/tutorials/packaging-projects/):

1. Create the structure
    ```
    packaging_tutorial/
    └── src/
        └── example_pkg/
            └── __init__.py
            └── example_pkg.py
    ```
1. Configure metadata
    ```cfg
    [metadata]
    # replace with your username:
    name = example-pkg-YOUR-USERNAME-HERE
    version = 0.0.1
    author = Example Author
    author_email = author@example.com
    description = A small example package
    long_description = file: README.md
    long_description_content_type = text/markdown
    url = https://github.com/pypa/sampleproject
    project_urls =
        Bug Tracker = https://github.com/pypa/sampleproject/issues
    classifiers =
        Programming Language :: Python :: 3
        License :: OSI Approved :: MIT License
        Operating System :: OS Independent

    [options]
    package_dir =
        = src
    packages = find:
    python_requires = >=3.6

    [options.packages.find]
    where = src
    ```
1. Create README
1. Create LICENSE
1. Update if necessary
    * Windows `py -m pip install --upgrade build`
    * Unix `python3 -m pip install --upgrade build`
1. Generate
    * Windows `py -m build`
    * Unix `python3 -m build`
1. Install `pip install C:/some-dir/some-file.whl`

To use this example: `from example_pkg import example_pkg`

## Tips

* `time.sleep(1)` to pause 1 sec

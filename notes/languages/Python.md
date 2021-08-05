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
`#` | Comment, single line
\`\`\` | Comment, multiple lines
`var x` | Declare a new var, any type
`var _x` | Private variable
`x = name.fctA(par)` | Populate var x with the function
`from math import *` | Import every module from *math*

#### Naming Convention

[See here](https://pythonguides.com/python-naming-conventions/)

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
`list = [[a,b][c,d]`| List in list
`print(*list, sep=", ")` | print each item in *list* with , as separator

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

### Thread-based parallelism

The following function will return "Spun off" before "Done", as there's a wait function. [Source](https://stackoverflow.com/questions/6683475/non-blocking-python-process-or-thread)

```python
import threading, time

def my_threaded_func(arg):
    print("Running thread! Args:", (arg))
    time.sleep(2)
    print("Done!")

thread = threading.Thread(target=my_threaded_func, args=("I'm a thread",))
# Note the ,) at the end: Thread expect arg to be iterable, so you have to pass a tuple
thread.start()
print("Spun off thread")
```

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
    break                   # Break the current loop
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

```python
# Know the type of the variable (float, int, str, list, dict, tuple)
x = isinstance(var, str) # x = True if var:str
```

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

#### Base conversion (decimal, hexadecimal, binary)

```python
import binascii
y = binascii.hexlify(x)     # convert x in hexadecimal
```

### Numbers

Text|Action
-|-
`str(x)` | int to str
`int(x)` or `float(x)` | str to int or float

#### Random

```python
import random
x = random.randint(0,10)
print(x)
```

### Bytearrays

```python
[hex(i) for i in data]  # print content of data in pretty hexadecimal
```

### Files

Text|Action
-|-
`a = open("f.txt", "r+")` | open the file in:<br>r+ - read & write><br>r - read<br>w - write<br>a - append
`a.close()` | close
`a.readable()` | bool to check if Read possible
`a.readlines()` | read each lines in array [line1, lineN]
`a.write("text")` | Mode "w": overwrite the file with text<br>Mode "a": append text at end of file

### Logs - Logging class

Example inspired from this [StackOverflow thread](https://stackoverflow.com/a/54424164)

```python
_log_level=logging.DEBUG 
_log_format = logging.Formatter('[%(asctime)s] [%(levelname)s] - %(message)s')
_LOGGER = logging.getLogger(__name__)                                  
_LOGGER.setLevel(_log_level)                                       

# writing to stdout                                                     
handler = logging.StreamHandler(sys.stdout)                             
handler.setLevel(_log_level)                                        
handler.setFormatter(_log_format)                                        
_LOGGER.addHandler(handler)                                            
                                                                  
_LOGGER.debug("Logging has been setup")   
```

### Network

#### Requests: PUT, GET, POST

Example of a POST:

```python
import requests
user = "user"
pwd = "password"
headers = {"Content-Type":"application/json"}
data_JSON = {
    "id": "value",
}
response = requests.post(url, auth=(user, pwd), headers=headers, json=data_JSON)
```

You can use `data=` instead of `json=`.

#### UDP Communication

Text|Action
-|-
`import socket`|
`UDPServerSocket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)` | Initiate a new UDP socket
To receive something |
`UDPServerSocket.bind(("", port))` | Bind the socket to port
`data, address = UDPServerSocket.recvfrom(1024)` | Receive incoming data and ip with a buffer size of 1024
To send something |
`UDPServerSocket.sendto(data, (host, port))` | Send *data* to host:port

[Source](https://pythontic.com/modules/socket/udp-client-server-example)

## Classes & Objects

### Definition

```python
class ClassName:	
    def __init__(self, a, b):   # a b are used for initialization
        self.a  = a
        self.a  = a
    def function(self):	
        return a
    def functionb(self, x: int) # x must be of type int
        return x
```

### Usage

```python
from filename import ClassName
object = ClassName("a", "b")
print(object.a)

# Delete an object
del object
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
data['k1'].get['k12','']        # Get [k1][k12], otherwise return ''
len(data)                       # Get number of items in data
```

## Development

### Package an application for pip

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

### Publish an application on PyPI

[There's a good tutorial here](https://realpython.com/pypi-publish-python-package/)

1. Configure `setup.py`
1. Document with Readme and License
1. Increment version in `setup.py` and `__init__.py`
    * Or with `bump2version --current-version 1.0.0 minor setup.py PROJECT/__init__.py`
1. Install `pip install twine wheel` if necessary
1. Create archive and wheel `python setup.py sdist bdist_wheel`
1. Check `twine check dist/*`
1. Upload to TestPyPI `twine upload --repository-url https://test.pypi.org/legacy/ dist/*`
1. Upload to PyPi `twine upload dist/*`
1. Make a release in GitHub

### Virtual environment - *venv*

Useful to use one library for one project!

* *System packages* are coming with Python
* *Site packages* are installed by user, using *pip* for instance

How to use - [Source](https://realpython.com/python-virtual-environments-a-primer/)

1. `pip install virtualenv` to install *virtualenv*
1. Create a directory for your project
1. `python -m venv env` set up the venv in folder `env` - it won't contain existing site package by default
1. `.\env\Scripts\activate` to activate the venv
    * If you have an error about PowerShell scripts, try `Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser` - [Source](https://dev.to/aka_anoop/enabling-virtualenv-in-windows-powershell-ka3)

## Kivy - Cross-platform GUI Python Framework

With a virtual environment active, install with `python -m pip install kivy[base] kivy_examples`

### UI

UI is defined in widgets with [Layout](https://kivy.org/doc/stable/api-kivy.uix.layout.html), like:

* BoxLayout
* FloatLayout
* GridLayout

#### KV Language

KV Language can be used to separate interface design from logic.

The logic:

```python
from kivy.app import App
from kivy.uix.button import Button

class ButtonApp(App):
    def build(self):
        return Button()

    def on_press_button(self):
        print('You pressed the button!')

if __name__ == '__main__':
    app = ButtonApp()
    app.run()
```

The interface in a file named `button.kv`:

```python
<Button>:
    text: 'Press me'
    size_hint: (.5, .5)
    pos_hint: {'center_x': .5, 'center_y': .5}
    on_press: app.on_press_button()
```

### Events

#### Buttons

```python
from kivy.app import App
from kivy.uix.button import Button

class MainApp(App):
    def build(self):
        button = Button(text='Hello from Kivy',
                        size_hint=(.5, .5),
                        pos_hint={'center_x': .5, 'center_y': .5})
        button.bind(on_press=self.on_press_button)

        return button

    def on_press_button(self, instance):
        print('You pressed the button!')

if __name__ == '__main__':
    app = MainApp()
    app.run()
```

### Images

```python
from kivy.uix.image import Image
#...
img = Image(source='/path/to/real_python.png',
            size_hint=(1, .5),
            pos_hint={'center_x':.5, 'center_y':.5})
return img
```

### Kivy examples

```python
from kivy.app import App
from kivy.uix.label import Label

class MainApp(App):
    def build(self):
        label = Label(text='Hello from Kivy',                       # Create a label
                      size_hint=(.5, .5),                           
                      pos_hint={'center_x': .5, 'center_y': .5})    # Positions are between 0 and 1

        return label

if __name__ == '__main__':
    app = MainApp()         # Instantiate the MainApp class
    app.run()
```

### Publish application

#### Android

1. `pip install buildozer` or `python -m pip buildozer`
1. `buildozer init` to create default `buildozer.spec` file

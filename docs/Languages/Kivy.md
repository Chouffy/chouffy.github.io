is a cross-platform [[GUI]] [[Python]] Framework
## Install
With a virtual environment active, install with `python -m pip install kivy[base] kivy_examples`
## UI
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
## Events
### Buttons
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
## Images
```python
from kivy.uix.image import Image
#...
img = Image(source='/path/to/real_python.png',
            size_hint=(1, .5),
            pos_hint={'center_x':.5, 'center_y':.5})
return img
```
## Kivy examples
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
## Publish application
### Android
1. `pip install buildozer` or `python -m pip buildozer`
1. `buildozer init` to create default `buildozer.spec` file

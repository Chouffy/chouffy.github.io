---
parent: Languages
---

# CSS

[Reference sheet on W3Schools](https://www.w3schools.com/cssref/default.asp)

## Styling organization

### Inline

In any HTML tag in body, add for example `style="color: blue; ~"`

### Head - Style with CSS Selectors

* head
    * style
        * h1 { - CSS Selectors: *all h1 will be affected*
            * color: blue;
            * }
* body
    * element, like h1

### External CSS stylesheet

*In style.css:*

```css
body {
    color: blue;
}
```

*In head of html:*

```html
<link rel="stylesheet" href="style.css" />
```

### Import

*In CSS*:

```css
@import "relativepath.css";
```

And then override possible.

### CSS Selector

#### ID - one specific element in the document

**In CSS**  
`#element-ID { ~ }`

**In html**  
`id="element-ID"`  
*One element can only have one ID*

#### Classes

**In CSS**  
`.class-name { ~ }`

**In HTML**  
`class="class-name"`  
or `class="class1 class2"`

#### Existing tags

*In CSS file:*  
[Full table here](https://www.w3schools.com/cssref/css_selectors.asp)

Tag | Action
-|-
`* {}` | whole document
`h1, h2, p {}` | every h1, h2, p
`ul > li {}` | every li inside ul
`p + h2 {}` | every h2 after a p
`[href] {}` | every element with attribute href
`[title*="lem"]` | every element with attribute title starting with lem
`li[title="lemons"]` | every li element with attribute title:"lemons"
`input` | every input
`input:checked` | every element which is checked
`input[type="checbox"]:checked` | every checkbox which is checked
`h2:hover` | element which is under cursor
`ul > li:first-child`<br>`ul > li:nth-last-child(3)` | First child of each li inside ul <br> 3 last child of each li inside ul

## Sizing

Tag | Action
-|-
100px | Fixed size in pixel
80% | Relative to screen size
2em | 2x~16px = double text size

## Styles

### Font

Tag | Action
-|-
`font-size: 20px` | 
`font-family: 'Courier'` | define a font
`font-style: italic` | 
`font-variant: small-caps` | 
`font-weight: bold` | 
`text-shadow: 2px 3px 2px red` | horizontal vertical blur color <br>*distance of shadow*

### Color

Can use CSS name, #ffffff, rgb(0,0,0), hsl(0,0,0)

Tag | Action
-|-
`color: blue` | 
`background-color: green` | 
`opacity: 0.5` | opacity of 50%

### Container arrangements

[All classes display on W3Schools](https://www.w3schools.com/CSSref/pr_class_display.asp)

Tag | Action
-|-
`width: 100px` | 
`max-width: 500px` | 
`box-shadow: 5px 5px 5px grey` | horizontal vertical blur color <br>*distance of shadow*
`border: 1px solid black` | width style color
`border-radius: 5px` | Circular borders

#### Padding - spacing inside the element

Tag | Action
-|-
`padding: 10px` | 
`padding-top: 50px` | also -bottom -left -right
`padding: 50px 10px 50px 10px` | Clockwise: top, right bottom, left

#### Margin - spacing outside the element

Tag | Action
-|-
`margin: 25px` | 
`margin:-10px` | Negative
`margin-top: 10px` | also -bottom -left -right
`margin: 50px 10px 50px 10px` | Clockwise: top, right, bottom, left

#### Float - put elements on the side

Tag | Action
-|-
`float: none` | 
`float: left` | element on the left side, other content will be on the right
`float: right` | inverse

#### Display - how elements are displayed

Tag | Action
-|-
`display: none` | does not render the block
`display: block` | takes all the width of the page - by default
`display: inline` | takes only space needed - like span

### Positions

#### Static - follow definition in document

#### Relative - relative where it should be

Tag | Action
-|-
`position: relative` | 
`top: 20px` | position it 20px away from it should be also bottom left right

#### Absolute - relative to the parent container

Tag | Action
-|-
`position: absolute` | 
`top: 0px` | position it at 0px relative to the parent container (or document) <br>also bottom left right

#### Fixed - relative to the viewport

viewport = the browser window viewport = the browser window 

Tag | Action
-|-
`position: fixed` | 
`top: 0px` | keep the element at the top <br>also bottom left right

## Flexbox - Grid layout

*In CSS*:

```
.flex-container {

    display: flex;                              | Activate flexbox

    flex-direction: row                         | Stacks box in a row
                    row-reverse                 | ... in reverse order
                    column                      | ... in column

    justify-content:    flex-start              | Side box on the left
                        flex-end                | ... on the right
                        center                  | ... on the center
                        space-between/around    | ... with space between/around box

    flex-wrap:  wrap                            | Line wrap according to screen size
                wrap-reverse
                no-wrap

    align-items:    flex-end                    | Align items at the bottom
                    center                      | ... at the center

    align-content:  flex-start                  | Hold items on the top
                    center
                    space-center/between        | ... with space around or between
}
```

*In HTML*:

* `div class="flex-container container"`
    * `div class="box flex-item"`
        * h1:1
    * `style="align-self: center"`: Center this element

## Animations

Direct transition:

```css 
@keyframes change-color {
    from {color: blue;}
    to {color: red;}
}
```

Transition with steps and with position change:

```css
@keyframes change-color {
    0% {color: blue; top:10px}
    10% {color: green; top:20px}
    100%{color: red; top:30px}
}
```

```css
.box-animation {
    animation-name: change-color            | define the animation to use
    animation-duration: 4s	
    animation-iteration-count:  infinite    | infinite animation
                                3           | 3 animations
    position: relative	
}
```

`.box-anim:hover {}`: Selector possible

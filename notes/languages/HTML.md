---
parent: Languages
---

# HTML

## Syntax

In those notes | Meaning in HTML
-|-
tag alone | `<tag>content</tag>`
tag> | `<tag>`
tag/ | `<tag/>`

Comments : `<!-- comment -->`

## Head tags

```html
title
meta charset="UTF-8">
meta name="description" content="This is an awesome website">
meta name="author" content="Mike">
meta name="keywords" content="key1, key2">
meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## Body tags

### Structure tags

* header
    * nav - *navbar with links, …*
* main
    * article - *article of a blog for example*
        * section (multiple possible) - *part of the article, contain hx, p, …*
            * aside - *not directly connected to the content, like ads*
* footer

### Text

#### Text content

Tag | Role | comment
-|-|-
`br/` | break | new line
`chr/` | horizontal rule | horizontal line
`hx` | header | with x from 1 to 6
`p` | paragraph | to be used for each paragraph
`a` | link | see below

#### Text formatting

Tag | Role
-|-
`b` | bold
`i` | italic
`big` | bigger font size
`small` | smaller font size
`sup` | superscript

#### Text attributes

Applicable to body, p, hx
<~ **style**=~>content</p>

For example, change CSS color:

```css
style="
    color: blue;
    background-color: blue;"
```

#### Link attributes

`<a href=~>HTML content</a>`

Tag | Role
-|-
`href="https://www"` | link to external website
`href="page2.html"` | link to page in same directory
`href="cat.jpg"` | link to a file in same directory
`href="dir1/page3.html"` | link to page in sub-directory
`… target="_blank"` | … in new tab

### Images

`<img ~ '/>`

Tag | Role
-|-
`src="full_link.jpg"` | hard link to image
`… alt="Alt Text"` | alternative to image
`… width="100" height="100"` | size of the image - 100 px <br> if only one size is chosen, HTML adapt with correct aspect ratio

### Video

`<video ~>Content if video not displayed</video>`

Tag | Role
-|-
`src="link.mp4"` | link to video
`.. controls` | video controls
`… width="300"` | 300 px of width - auto correct aspect ratio
`… poster="thumb.jpg"` | thumbnail for the video
`… autoplay` | 
`… loop` | 

### Lists

Tag | Role
-|-
`ul/ol/dl` | list start
`li` | list item
`… href~` | attribute

#### ul - unordered list
`<ul><li>bla</li><li>bla</li></ul>`

#### ol - ordered list
`<ol><li>bla1</li><li>bla2</li></ol>`
`ol types="i"`: style of the list

#### dl - description list
`dt`: item
`dd`: item description

### Tables

* table
	* tr - *table row*
	    * th - *table header*>content<
		* td - *table data*> content<
	* caption - *title of the table*>content<
		

#### Structuration
* Table
	* thead - *table head*
	    * caption
	    * tr
			* th
			* th
	* tbody - *table body*
	    * tr
			* td
			* td
	    * tr
			* td

#### Table attributes

`td colspan="3"`: this data will use 3 columns

### Containers

Set of tags containing HTML elements
* block - takes all the width of a page -> divs
* inline - takes only needed space -> spans

#### Div - block containers
`div`: and then content

#### Span - inline containers
`span`: and then content

### Inputs

`form`: form element - wrapper for input

#### One line input

Tag | Role
-|-
`input type="text"` | create a text box
`input type="password"` | create a password box
`.. type="date","email","range","file"` | examples of types
`… value="Default Value"` | define default value

#### Multiple input

Tag | Role
-|-
`textarea>Text Message` | Text area with message
`… rows="10" cols="30"` | define size

#### Selectors

Tag | Role
-|-
`input type="checkbox"` | 1 checkbox
`input name="btn1" type="radio"` <br>`input name="btn1" type="radio"` | 2 radios buttons

### iFrames

Tag | Role
-|-
`iframe src="http://www.">Text<` | iframe to src, Text is displayed if frame not available
`… width="100" height="100"` | website
`… frameborder="0"` | no borders

## Reference

*[HTML - Build a Website | Tutorial](https://www.youtube.com/playlist?list=PLLAZ4kZ9dFpMSXUYwxDFOvyxlssug29Fu) by Mike Dane
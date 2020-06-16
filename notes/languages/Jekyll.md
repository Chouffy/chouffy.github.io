---
parent: Languages
title: Jekyll
---

{% raw %}

# Setup

Install: [follow Jekyll website](https://jekyllrb.com/docs/)

For GitHub Pages, change in `_config.yml`:
* *baseurl:* to the domain name (*repo_name* for example)
* Uncomment relevant part for GitHub Pages

## Useful commands

Command | Code
-|-
Create | `jekyll new SITE_NAME`
Serve 1st time | `bundle exec jekyll serve`
Serve | `jekyll serve`
Serve drafts | `jekyll serve --draft`

## File structure

Folder name |  Description
-|-
`_posts\` | All blog posts
`_drafts\` | All drafts (created afterward)
`_layouts\` | All layouts (created afterward)
`_includes\` | All includes (created afterward)
`_data\` | All data (created afterward)
`_site\` | Website itself (output)
`_config.yaml` | Config file
`Gemfile` | Ruby dependencies, including plug-in

# Front Matter

Gives information about each published pages, in YAML or JSON.

YAML Code | Comment
-|-
`---` | Start of block, at the top of the page
`layout: "post"` | mandatory to use the *post* template
`title:  "Welcome to Jekyll!"` | override title defined in markdown file
`date:   2020-05-20 15:48:17 +0200` | override date of file, have effect on URL
`categories: jekyll update` | used in defined order to parse the URL
`permalink: "/my-url/test/test2"` | override URL generation by Jekyll with a defined name
`permalink: "/:categories/:year/:month/:day/:title"` | override URL generation by Jekyll with variables 
`author: "Bob"` | Custom Front Matter variable *author*
`---` | 

## Default Front Matter

Useful to avoid define layout

In `_config.yml`, at the end of it:
```
defaults:
  - scope:
      path: ""          | All files affected by those settings
      path: "folder"    | Files in "folder" affected
      type: "posts"     | Types to affect, avoid pages
    values:
      layout: "post"
```

Example for a *image=true* variable passed for all files in `assets/img`: 
```
defaults:
  - scope:
        path: "assets/img"
    values:
        image: true
```

# Theme

## Installation from Gem

Search for themes in [RubyGems](https://rubygems.org/search?utf8=%E2%9C%93&query=jekyll-theme).  
Be careful to update `layout:` in your posts to ones defined in the theme.

1. Edit in `Gemfile`, add the dependency after *minima* theme: `gem "jekyll-theme-XX"`
1. Run `bundle install` to install all *gems* needed
1. Edit `_config.yml`, change `theme:` to the one selected
1. Run `bundle exec jekyll serve`

## *Just The Doc* theme

[Just The Doc](https://pmarsceill.github.io/just-the-docs/)  
Search need to be initialized with `bundle exec just-the-docs rake search:init`  
`_config.yml` options are [here](https://pmarsceill.github.io/just-the-docs/docs/configuration/)

For HTTPS, don't forget to put "https://" [in your CNAME](https://github.com/pmarsceill/just-the-docs/issues/287) and enforce HTTPS in GitHub Pages settings.

# Templates 

## Layout

Create  `layout_name.html` in `_layouts\`.  
For example, `post.html` affect posts with `layout: post`.

In a layout page, a *parent* layout can be defined in the Front Matter: `layout: "parent_layout"`

## Includes

Pieces like header or footer to be reused inside layouts.

Create `header.html` in `_includes\`.  
Can be used in *layout* with: `{% include header.html %}`.  
A variable can be passed: `{% include header.html color="blue"%}` and accessed with `{{ include.color }}`.

## Variables

Variables | Comment
-|-
`{{ content }}` | Page content
`{{ page.title }}` | Page title
`{{ page.author }}` | Variable *author* defined in Front Matter of the **page**
`{{ layout.author }}` | Same, but defined in **layout**
`{{ site.author }}` | Same, but defined in `_config.yml`

More variables in [Jekyll doc](https://jekyllrb.com/docs/variables/)

## For - Loops

Used in *home* layout definition


```liquid
{% for post in site.posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
```


## If - Conditional


```liquid
{% if page.title == "Page Title" %}
    Do something
{% elsif (page.title == "Page2" and condition) or condition %}
    Do something
{% else %}
    Do something
{% endif %}
```


# Entries

## Post

Normal post entry.

Filename: `yyyy-mm-dd-title-space-delimiter.md`  
Lives in `_posts\` or `_drafts\`, can be in any (sub) directory in with no effects.

File content:
1. Front Matter
1. Actual content

## Page

Like *about* page.  

Filename: `title.md`  
Lives in root directory. If in subdirectory, that'll be reflected on URL.

In the Front Matter:
* `layout: "page"`
* `title: Title`

# Data

## Creation

Either YAML, JSON or CSV.
Create `people.yml` in `_data\`

## Access

Raw: `{{ site.data.people }}`  
A loop can be used.

# Assets - Static files

Can be anywhere.

```liquid
{% for file in site.static_files %}
    {{ file.path }} <br>
{% endfor %}
```


Check related default Front Matter 

# References

* [Mike Dane tutorial series](https://www.youtube.com/playlist?list=PLLAZ4kZ9dFpOPV5C5Ay0pHaa0RJFhcmcB)

{% endraw %}

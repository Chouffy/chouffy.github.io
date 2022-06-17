---
grand_parent: Softwares
parent: Windows
---

# Keypirinha

A really good keystroke launcher, and also capable to search for stuff when configured!

## Configuration

[Multiple profiles can be defined.](https://keypirinha.com/configuration.html#machine-and-user-specific-settings)

### Shortcuts

```ini
[app]
hotkey_run = Alt+Space
hotkey_history = Win+Alt+Space
```

### History

Open `(portable)\Profile\User\Keypirinha.history` and delete necessaries entries.

## Packages

[PackageControl](https://github.com/ueffel/Keypirinha-PackageControl), a nice package manager

* Everything is prefixed with `PackageControl:`
* Restart Keypirinha is recommended
* All packages are [listed here](https://ue.spdns.de/packagecontrol/)

### FilesCatalog

*A package to catalog the content of your filesystem in a fine-grained fashion.*

[Official documentation](https://keypirinha.com/packages/filescatalog.html)

Work based on custom-defined *profiles*:

```ini
[profile/ProfileName]
activate = yes
paths =
    D:\Data\**              # Scan recursively
    ${var:APP_DRIVE}\Data   # Use variables
inherit = InheritProfile
filters = + ext: .txt       # Specify filters - see builtin help
file_item_label = {profile}: {dir1}\{clean_name}    # Show a custom label
```

*paths* can be defined with [predefined variables](https://keypirinha.com/configuration.html#predefined-variables)

### WebSearch

Some useful websites:

```ini
[main]
enable_predefined_sites = no

# Translations
[site/French synonyms - SynFR]
url = https://crisco2.unicaen.fr/des/synonymes/%s
history_keep = all
[site/English synonyms - SynEN]
url = https://www.wordreference.com/redirect/translation.aspx?dict=synonyms&w=%s
history_keep = all

# WordReference
[site/WordReference EN-FR - EnFr]
url = http://www.wordreference.com/enfr/%s
history_keep = all
[site/WordReference FR-EN - FrEn]
url = http://www.wordreference.com/fren/%s
history_keep = all
[site/WordReference EN-NL - EnNl]
url = http://www.wordreference.com/ennl/%s
history_keep = all
[site/WordReference NL-EN - NlEn]
url = http://www.wordreference.com/nlen/%s
history_keep = all

# Conjugation
[site/French conjugation - ConjugFR]
url = http://la-conjugaison.nouvelobs.com/rechercher/index.php?mot=%s&moteur=conjugaison
history_keep = all
[site/English conjugation - ConjugEN]
url = https://la-conjugaison.nouvelobs.com/rechercher/index.php?l=en&q=%s
history_keep = all

# Other
[site/Keepa - Amazon Price compare]
url = https://keepa.com/#!product/3-%s
```

### PuTTY / KiTTY Portable

The included [PuTTY Package](https://keypirinha.com/packages/putty.html?highlight=putty) can also be used for KiTTY - just configure the `[dist/filebased]` section.
If not updated, you can install it manually: simply zip the `.ini` and `.py` for the module into `PuTTY.keypirinha-package` and replace the official one.

## Theme

```ini
[gui]
auto_width = 50 # Larger box
hide_on_focus_lost = yes
theme = ChouffyBlack # To use theme defined below
```

### My theme

```ini
[theme/ChouffyBlack]
opacity_back = 95
satellite_show = never
satellite_pos = topcenter
satellite_size = jumbo
control_margin = 2
textbox_padding = 1
listitem_padding = 1
layout = list_dialnum,list_hits,list_icon
color_background = #484848
color_foreground = #f2f2f2
color_title = #f2f2f2
color_textbox_back = #303030
color_faded = #a2a2a2
color_status = #a2a2a2
color_accent = #a6e5ff
color_warn = #eb6420
color_listitem_back = #383838
color_listitem_title = #f2f2f2
color_listitem_desc = #a2a2a2
color_listitem_tips = #a2a2a2
color_listitem_selected_back = #2f2f2f
color_listitem_selected_title = #a6e5ff
color_listitem_selected_desc = #f2f2f2
color_listitem_selected_tips = #a6e5ff
font_large_size = 12
font_large_style = bold
font_snormal_size = 9
font_snormal_style = cleartype
font_normal_size = 10
font_normal_style = cleartype
font_small_size = 8
font_small_style = cleartype
font_face = Tahoma, Arial, Segoe UI
compact_results = no
listitem_title_font = snormal
```

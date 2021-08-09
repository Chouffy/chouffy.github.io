---
parent: Softwares
---

# DaVinci Resolve
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Main views

### Media

Import and manage media

### Cut

Edit with speed

#### Upper timeline

* Overview on the whole project
* Edit can also be done

#### Lower timeline

* Locked to position at the middle

### Edit

#### Media Pool

Everything that will be included: audio, video

* Pass through to preview clip
* Double click to have it in Source viewer
* Do a selection to be dragged
    * _i_ for in
    * _o_ for out
    * _Shift+F12_ to append at the end of the timeline

#### Viewer

* Source Clip
* Source Tape
* Timeline
    * Content dragged in can be placed in multiple way in the timeline: insert, at the end, ...
    * Toolbar available, same tools than Inspectors

#### Timeline

* On clips
    * Selection Mode
        * Edge of clips can be adjusted
        * _Return_ to remove clip and leave empty space
        * _Del_ to remove clip and empty space
    * Blade tool to cut
* On empty space
    * _Return_ to remove blank and put next clip instead

### Fusion

Compositing program, like After Effect

Preview:

* Hit _1_ or white left bubble to assign to left viewer
* Hit _2_ or white right bubble for right viewer

Work with nodes, akin to recipe:

* In and Out for nodes
* Need to use Merge nodes to bring multiple effects together

Keyframes effects can be edited in Inspector and further in Spline

Effects

* Shape need to be connected to a Render before being applied

### Color

Color correction, works like Fusion

The toolbar allows multiple tools

* Color wheels to adjust colors
* Curves to edit color curves
    * But also can change color on the fly
* Color wrapper
* Window allow only a subset of the image to be selected
* Tracking can track an object
    * Tracking can also be manually corrected

In the timeline

* 3rd click to copy a clip into selected clip

In the gallery

* Right click on image to grab a still, then you can export it from the gallery

### Fairlight

Audio edit

Vocal workflow - target -10dB:

1. Normalize: Right-click on clip > Normalize > -8 dB ;
1. Dynamics: In Fairlight > Above mixer > Dynamics
    1. Compressor
        * Make Up: Volume boost; with red line = clip
        * Ratio change amount of compression
        * Send button to chain
    1. Expander / Gate: Dynamic range
        * Expander - Threshold: ~-25 > -30; can remove background noise after threshold
        * Gate - Threshold: ; reduce things after threshold
    1. EQ
        * Band 1: On until 100
        * Band 6: On after 10k6
        * Band 2
            * Info
                * Style with diamond-shape
                * Q factor is the spread
            1. Swipe with high Q factor and high gain to identify bad things
            1. When identified, inverse gain a bit (-4)
        * Do it on other + bands, like 223/528/1k04
1. Effects > Dynamics > Multiband compressor
    * Default settings is good
1. Effects > Noise Reduction > Fairlight > De-Esser
    * Choose Preset, change de-esser if needed

Notes:

* Music: -10 @ 125hz
* Voice
    * De-esser Male SH
    * EQ
    * Dynamics

#### Navigation

Timeline view:

* Scroll to be in timeline
* Alt-Scroll to change width
* Ctrl-Scroll to change zoom
* `Y` to select all clip forward on a given track

Edition:

* Can grab end of track to fade
* Can edit points inside track to change level

* Side panel
    * Sounds Library
    * Mixer
        * EQ and Dynamic can be set here, with Compressor
        * To help Voice over, music can be EQ -6 db @ 1kHz
        * Frequency Analyzer are in Effects

### Deliver

## Side panels

* Inspector

### Effect library

* Video effect: Toolbox > Effects
    * Adjustment Clip - Highlight an area
        1. Place it above on the part of the clip you want to highlight
        1. Go to Color tab
        1. Choose Window tab
        1. Select one of the form, like Square and adjust size
        1. Change the Offset color grade
        1. Invert the form  

---
parent: Softwares
---

# ServiceNow

## Data

### Mass Update

* Single column
    * Hold *Shift* to select multiple lines
    * Double-click on one item
* Multiple column
    * Check boxes
    * Click on a table column > *Update Selected*

### In & Out Exports

* An XML can be created from one or many record
* sys_id will be kept

## JS Development

### JS Scripts

* Server-side scripting in JS: in _Scripts - Background_ module or in `https://instance.sn/nav_to.do?uri=%2Fsys.scripts.do`
* return a sys_id in a Flow: `return "0dde2d9cdbc264104bca2a8cd396194a";`

### Work with Records

#### Get a record

```js
var gr = new GlideRecord('table_name');     
gr.get('sys_id');
```

#### Update a record

```js
gr.FIELD = VALUE;
gr.update();
```

#### Delete a record

 `gr.deleteRecord();`

[Source](https://servicenowguru.com/scripting/gliderecord-query-cheat-sheet/)

## REST Development

* Use *REST API Explorer* to build out requests

### Get records from a table

* `sysparm_query`: Build the query on desktop and right-click -> *Copy Query* - [Source](https://developer.servicenow.com/dev.do#!/learn/learning-plans/quebec/servicenow_application_developer/app_store_learnv2_rest_quebec_more_about_query_parameters)

## Admin

### Auto login

Pass username and password directly: `https://INSTANCE.service-now.com/login.do?user_name=USER&sys_action=sysverb_login&user_password=PASSWORD`

### SN Utils

* Need to use the *On Prem* version when using an instance without *.service-now.com
* Useful shortcuts using `CTRL+/`
    * `pop` pop in/out
    * `tn` show technical names
    * `sys_id ...` search globally for sys_id ...
    * `nav` search into the Application list
    * `hist` search into the History list
    * `sa` switch in top 10 apps
    * `<table>` open table view

### Theming

* Set an ServiceNow Banner logo (top left in the application): go to *Basic Setup → My Company*
* Set a default theme: in `sys_user_preference.list`, define `glide.css.theme.ui16` value with theme sys_id.

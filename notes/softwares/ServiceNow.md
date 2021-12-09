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

### Most Valuable Tables

Table | Name | Function
-|-|-
`sys_properties` | System Properties | All properties
`sys_attachment` | Attachment | Contains all attachments, but not the data like images!
`sys_attachment_doc` | Attachment Document | Contains attachment data

### Most Valuable Properties

Name | Description
-|-
`glide.email.smtp.active` | Email sending enabled

## Reports

### Show records without a related record

1. Create a report that shows all records
2. Run it
3. In the filter, add a related list condition

## JS Development

### JS Scripts

* Server-side scripting in JS: in _Scripts - Background_ module or in `https://instance.sn/nav_to.do?uri=%2Fsys.scripts.do`

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

## Flow Designer development

* Use CTRL+Space for autofill
* Return a sys_id in a Flow: `return "0dde2d9cdbc264104bca2a8cd396194a";`

### Convert a string into an integer

1. Create a Flow variable
1. Set the flow variable and define this inline script:

    ```js
    var valString = fd_data._2__look_up_record.record.value;
    var valInt = parseInt(valString);
    return valInt;
    ```

## REST Development

* Use *REST API Explorer* to build out requests

### Get records from a table

* `sysparm_query`: Build the query on desktop and right-click → *Copy Query* - [Source](https://developer.servicenow.com/dev.do#!/learn/learning-plans/quebec/servicenow_application_developer/app_store_learnv2_rest_quebec_more_about_query_parameters)

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
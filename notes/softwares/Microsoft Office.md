---
parent: Softwares
---

# Microsoft Office

## Excel

### Startup option

* Safe mode: hold `CTRL` key
* New instance: hold `ALT` key

### Excel UI

* Move the cursor in a selection box: **F2**
* Select only visible cells: **Alt + ;**

#### Un-hide all tabs

**Alt+F11** for VBA
**F5** for execution

```vb
Sub UnhideAllSheets()
    Dim ws As Worksheet
 
    For Each ws In ActiveWorkbook.Worksheets
        ws.Visible = xlSheetVisible
    Next ws
 
End Sub
```

#### Remove a password on a protected sheet

1. Open the XLSX as a ZIP
1. Navigate to `xl` → `worksheets`
1. Edit the sheet, if trouble to find it: search for `sheetProtection`
1. Remove everything between `<sheetProtection ... />`. This is usually just before `</sheetData>`
1. Save the `sheetX.xml` file in the XLSX and reopen the Excel!

### Data

* Date & Time: convert UNIX epoch to Excel format → `(A1/86400)+25569+(-5/24)` with A1 the data cell
* Data validation: List without a Range → Use comma: `xx,yy,zz`

## PowerQuery / PowerBI

* Comment: `//` or `/*` and `*/`
* Library: `=#shared`
* Define PK: `Table.AddKey`

## Word

### Word UI

* Show Fields code: **Shift-F9**

## Outlook

### Calendar

* Clear "Recent Location" drop-down list → Delete keys in: `HKEY_CURRENT_USER\Software\Microsoft\Office\16.0\Outlook\Preferences\LocationMRU`

### Teams

* Remove a Teams meeting from an existing invite: Add to the Ribbon the *Don't Host Online* command.

## PowerPoint

### Toolbar

* A great toolbar: [Instrumenta](https://github.com/iappyx/Instrumenta)

### Master slides

* Change default slide when creating new slide: put this slide as the 3rd item in the master view. [Source](https://superuser.com/questions/548038/change-default-slide-layout-in-powerpoint#637148)

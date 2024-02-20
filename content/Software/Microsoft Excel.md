---
aliases:
  - Excel
---
Is a spreadsheet [[Software]], part of [[Microsoft Office]],
## Startup option
* Safe mode: hold `CTRL` key
* New instance: hold `ALT` key
## Excel UI
* Move the cursor in a selection box: **F2**
* Select only visible cells: **Alt + ;**
### Un-hide all tabs
- **Alt+F11** for VBA
- **F5** for execution

```vb
Sub UnhideAllSheets()
    Dim ws As Worksheet
 
    For Each ws In ActiveWorkbook.Worksheets
        ws.Visible = xlSheetVisible
    Next ws
 
End Sub
```
### Remove a password on a protected sheet
1. Open the XLSX as a ZIP
1. Navigate to `xl` → `worksheets`
1. Edit the sheet, if trouble to find it: search for `sheetProtection`
1. Remove everything between `<sheetProtection ... />`. This is usually just before `</sheetData>`
1. Save the `sheetX.xml` file in the XLSX and reopen the Excel!
## Data
* Date & Time: convert UNIX epoch to Excel format → `(A1/86400)+25569+(-5/24)` with A1 the data cell
* Data validation: List without a Range → Use comma: `xx,yy,zz`
* New line in a formula: `CHAR(10)`
### ![[M]]
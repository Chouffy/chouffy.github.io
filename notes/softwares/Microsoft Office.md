---
parent: Softwares
---

# Microsoft Office

## Excel

### Date & Time: convert UNIX epoch to Excel format

`(A1/86400)+25569+(-5/24)` with A1 the data cell

### Data validation: List without a Range

Use comma: `xx,yy,zz`

### Move the cursor in a selection box

Press **F2**

### Embedded a part of a document

In Excel, click on copy
In the target app (Word, Powerpoint), click on *Paste Special > Link > Excel spreadsheet*

### Unhide all tabs

**Alt+F11** for VBA
**F5** for execution

```vba
Sub UnhideAllSheets()
    Dim ws As Worksheet
 
    For Each ws In ActiveWorkbook.Worksheets
        ws.Visible = xlSheetVisible
    Next ws
 
End Sub
```

### Select only visible cells

**Alt + ;**

## PowerQuery / PowerBI

Comment: `//` or `/*` and `*/`
Library: `=#shared`
Define PK: `Table.AddKey`

## Word

### Show Fields code

**Shift-F9**

## Outlook

### Clear "Recent Location" drop-down list

Delete keys in: `HKEY_CURRENT_USER\Software\Microsoft\Office\16.0\Outlook\Preferences\LocationMRU`

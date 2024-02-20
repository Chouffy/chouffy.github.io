Is a "groupware" [[Software]] with mail, calendar and contact fonctions. Part of the [[Microsoft Office]] suite.
## Mails
* In a shared mailbox, put deleted items in the shared mailbox Deleted item box - [Source](https://docs.microsoft.com/en-us/outlook/troubleshoot/email-management/deleted-items-go-to-wrong-folder)
    1. In the registry, go to `HKEY_CURRENT_USER\Software\Microsoft\Office\16.0\Outlook\Options\General`
    2. Create/Edit a DWORD `DelegateWastebasketStyle`
    3. Set it to:
        * 8 = Stores deleted items in your folder.
        * 4 = Stores deleted items in the mailbox owner's folder.
### Signature
- Outlook add a new line before the signature but *not* after.
## Calendar
* Clear "Recent Location" drop-down list → Delete keys in: `HKEY_CURRENT_USER\Software\Microsoft\Office\16.0\Outlook\Preferences\LocationMRU`
* Send availability to somebody so he can plan a meeting: use [BookWithMe](https://outlook.office.com/bookwithme<font color="#c00000">/</font>me)
* Create an [[iCal]] feed URL: search for `Publish a Calendar` and get the ICS feed
## Teams
* Remove a Teams meeting from an existing invite: Add to the Ribbon the *Don't Host Online* command.
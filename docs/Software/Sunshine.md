Is a [[Software]] to [[stream desktop software]], similar to [[Nvidia GameStream]]
## Setup
- [GitHub page](https://github.com/LizardByte/Sunshine)
- [Documentation](https://docs.lizardbyte.dev/projects/sunshine/en/latest/)
## [[Windows]] 
- Disable Hardware Accelerated Graphic Scheduler (HAGS), in Settings → Graphic → Advanced
### Start on boot
- Import this task in the Windows Task scheduler: [[Sunshine.autologon.start.zip]] ([source](https://github.com/loki-47-6F-64/sunshine/issues/28#issuecomment-1287362707))
- Add the argument `--shortcut`
### Configure resolution automatically
- Use [[NirCmd]] ![[NirCmd#Set the display to a specific resolution]]
- With this command to be set in Configuration → General → Command Preparations: `cmd /C path\to\nircmd-x64\nircmd.exe setdisplay %SUNSHINE_CLIENT_WIDTH% %SUNSHINE_CLIENT_HEIGHT% 32 %SUNSHINE_CLIENT_FPS%`
### Configure DPI automatically
- Use [SetDPI](https://github.com/imniko/SetDPI)
## [[iOS]]
- Custom [[Screen Resolution]] like iPad in 4:3 needs to be created in graphic driver, otherwise Sunshine will crash
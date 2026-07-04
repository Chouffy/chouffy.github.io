Is a [[Software]] to handle [[Music|audio]], [[videos]] and similar.
## Notes
- List of all available devices: `.\ffmpeg -list_devices true -f dshow -i dummy -hide_banner`
- Open webcam panel: `.\ffmpeg -f dshow -show_video_device_dialog true -i video="USB 2.0 CAMERA"`
	- With `USB 2.0 CAMERA` the string of the available device
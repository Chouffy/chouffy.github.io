Is a [[Backup]] [[Software]] that can run on [[Windows]] and [[Linux]].
It's a good backup solution, if you have a good storage provider, but [[Restic]] performs similarly and very much faster (but without a web GUI)
## Setup
In Ubuntu, installed in `/usr/lib/duplicati/`, and use `'` in command line
## Usage
### Command-line interactions
Documentation for command line is [here](https://duplicati.readthedocs.io/en/latest/04-using-duplicati-from-the-command-line/).  
Useful commands:
* `Duplicati.CommandLine.exe delete <storage-URL> --version=<int>` to delete all files that belong to version `<int>`
* `Duplicati.CommandLine.exe test <storage-URL> <all/#> [<options>]` to check either all or a number (#) of sample

Troubleshooting:
1. Do a `repair` command from the command-line web interface
1. Do a `list-broken-files` to check affected files and versions
1. Do a `purge-broken-file` to remove the above
### Command-line client
1. Clone the [project repo]((https://pypi.org/project/duplicati-client/) and navigate in the folder
1. Login `./duplicati_client.py login http://localhost`
1. Do an action:
    * Regarding the server:
        * `./duplicati_client.py status`
        * `./duplicati_client.py list backups`
    * Regarding one backup:
        * `./duplicati_client.py get backup 1`
        * `./duplicati_client.py run backup 1`
        * `./duplicati_client.py run backup 1`
    * Regarding backup configuration:
        * `./duplicati_client.py export 1`
        * `./duplicati_client.py update 1`
1. Logout `./duplicati_client.py logout`


Is a suite of [[Web]] [[Software]] to do stuff.
## AWS IoT
Platform:
* Protocol
    * A device can publish or subscribe to message
* Scalability
* Security
    * Cert on IoT
* Integration
    * Shadow use to query an offline device
* SDK
### Setup example
In AWS IoT Console:
1. Create a Thing in *Manage → Things*
1. Secure it *Secure → Policies*
1. Test it in *MQTT Test client*
1. Redirect data in *Act → Rules*
    * Like to another MQTT topic
    * Or other AWS services: Lambda, IoT Analytics, ...

In AWS IoT Analytics:
1. Create or view *Channels* of information
1. *Pipelines* to transfer data to a data store
1. *Data store* to view existing data set
    * AWS QuickSight can be used to visualize data
## References
- [Amazon Web Services In Plain English](https://expeditedsecurity.com/aws-in-plain-english/)

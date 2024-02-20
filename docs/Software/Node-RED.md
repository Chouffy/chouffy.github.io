Is a visual [[programming language]] and the associated [[Software]] to run it.
## Installation on PC
1. Set-up an Alpine VM
1. Activate community packages
1. Install docker
1. [Install Node-RED](https://nodered.org/docs/getting-started/docker)
1. Set-up NAT forwarding as required
1. Start the Node-Red docker `docker start mynodered`
## Usage
* [Concepts](https://nodered.org/docs/user-guide/concepts)
* [Basic tutorial](https://nodered.org/docs/tutorials/first-flow)
### Generalities
* Nodes can be edited by double-click them
* New nodes can be added directly in the editor with `CTRL+click`
* If you want to set a default value, you can use an _inject_ node
    * But you may have to use 2 in order to change the value
### Function nodes
Message go through the node in JavaScript
Example for On Message:

```js
// Create a Date object from the payload
var date = new Date(msg.payload);
// Change the payload to be a formatted Date string
msg.payload = date.toString();
// Return the message so it can be sent on
return msg;
```
### Variables
```js
//Node context
let d = context.get("myData");
context.set("myData", {color: "red"});
var myData = context.get('myData') || 0;

//Flow context
let f = flow.get("sensor");
flow.set("sensor", 1234);
var sensor = flow.get('sensor') || 0;

//Global context
let g = global.get("active");
global.set("active", false);
var active = global.get('active') || 0;

```
### Dashboards
Use [`node-red-dashboard`](https://flows.nodered.org/node/node-red-dashboard)
#### Make a dashboard running even on no value change
1. Create an Inject timestamp with topic: dummy
1. Join the input with the dummy timestamp, after 1 message part
1. Create a function that return the input payload `return {payload: msg.payload.topic_input};`
### Images
* [node-red-contrib-chart-image](https://flows.nodered.org/node/node-red-contrib-chart-image) to generate images
    * ⚠ Not (easily) installable on Alpine because of missing dependencies
* [node-red-contrib-image-output](https://flows.nodered.org/node/node-red-contrib-image-output) to view them
### [[MQTT]]
* If you have a ghost MQTT broker, trying removing all brokers and restart Node-RED
* If you have `connecting`, check credentials - they are gone on import

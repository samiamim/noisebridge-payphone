## Freeswitch dialplan and scripts

Noisebridge has voice service on our spaceship. This is the code that implements some automated logic for the [payphone](https://noisebridge.net/wiki/Payphone) in the space.

## Installation

* build freeswitch with mod_v8 and mod_flite (this is a big task, so wow!)
* install and enable mod_v8
* Add this somewhere in your dialplan XML.
* Put payphone_menu.js in scripts in the freeswitch root


```xml
  <extension name="main_menu">
        <condition field="destination_number" expression=".">
            <action application="javascript" data="payphone_menu.js"/>
        </condition>
  </extension>
```

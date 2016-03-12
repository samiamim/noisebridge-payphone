### Freeswitch dialplan and scripts

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

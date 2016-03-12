### Freeswitch dialplan and scripts

```xml
  <extension name="main_menu">
        <condition field="destination_number" expression=".">
            <action application="javascript" data="payphone_menu.js"/>
        </condition>
  </extension>
```

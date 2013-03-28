GroMon
======
Basic wireless monitoring platform for experimentation and rapid prototyping.

* Raspberry Pi
* Arduino
* Node.js
* Bluetooth

#Bill of Materials
===
This is "must have" list for building the GroMon system. Each "half" of the solution is broken out separately. You can absolutely build either half independently, allowing you to split the purchase in two but still keep hacking.

## Server-side
* [Raspberry Pi](http://adafruit.com/products/998)
* [SD card](http://adafruit.com/products/102)
* [Wifi dongle](http://adafruit.com/products/814)
* Bluetooth dongle

## Arduino-side
* [Bluetooth Bee Standalone](http://www.seeedstudio.com/depot/bluetooth-bee-standalone-p-1157.html?cPath=139_142)
* [Seeed Studio XBee Carrier](http://www.seeedstudio.com/depot/grove-xbee-carrier-p-905.html?cPath=132_134)
* [DHT11 temperature sensor](http://www.seeedstudio.com/depot/grove-temphumi-sensor-p-745.html?cPath=144_147)
* [Grove cables](http://www.seeedstudio.com/depot/grove-universal-4-pin-20cm-unbuckled-cable-5-pcs-pack-p-749.html?cPath=178_179) for connecting the Seeed Studios gear 

## Stuff you probably have
But if not, you really should buy it.

* Micro USB cable
* Mini USB cable
* Some way of supplying power to the USB cables (like a wall wart, powered USB hub, etc)

## Optional fancy stuff
* [USB to TTL serial cable](http://www.adafruit.com/products/954) for the Raspberry Pi

# How to Use the Simulator
===
Directions for running the full solution coming soon. Until then, here's how you can simulate the remote sensor and get a feel for how things work.

## Linux (OSX?)
1. Open a terminal, then clone the GroMon repo.

    git clone git@github.com:aulvi/gromon.git

2. Navigate into the Web directory, then install modules.

    cd gromon/Web; npm install

2. Fire up socat and create a couple of serial ptys. This will take over your terminal.

    socat -d -d pty,raw,echo=0 pty,raw,echo=0

This command will return two devices in the output (ie, "N PTY is /dev/pts/5"). 

3. Open another terminal and start the dummy probe using the first device from the command above:

    node dummy-probe.js --port=/dev/pts/5

4. Start the web app using the other device:
 
    node app.js --probePort=/dev/pts/6

5. Within a few seconds you should see messages moving back and forth.


## License

Copyright (C) 2013 Adam Ulvi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
## SERVER and TELNET CLIENT TO CONTROL OMRON AMR LD90

# How does it work?
This software works based in NODEJS with libraries such as telnet-client and express.

It receives json from POST requests on route /ld with commands to connect and send actions to the AMR robot.

The serverIPAdress, serverPort and serverPassowrd are variables inside config.js file. This file is private, just because each robot has its own data.

# Why was it created?
This software was created to stablish communication between ARM robot and plant controllers, with the need to give instructions to the AMR robot.
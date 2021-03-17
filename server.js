const telnet = require('telnet-client');
const express = require('express');
const { response, request } = require('express');
const cors = require('cors');

const connectionConfig = require('./config.js');

const server = express();

server.use(express.json());
server.use(cors())

let connection = new telnet();

async function runTelnetConnection(){

    let params = {
        host: serverIpAddress,
        port: connectionConfig.serverPort,
        negotiationMandatory: false,
        timeout: 2000,
    };

    try {
        const response = await connection.connect(params);
    } catch (err) {
        console.log(err);
    };

    let resLD = await connection.send(serverPassword, (res) => console.log(res))
   console.log('aync result:', resLD);
}

async function patrol(point){
    let resPatrol = await connection.send(point);
 
    console.log(resPatrol);
};


server.post('/ld', async (request, response) => {
    const {action} = request.body;

    if(!action) return response.json('Please, send an action to the AMR');

    if (action == "connect"){
        await runTelnetConnection();
        console.log('Connected');
    } else { 
        await patrol(action);
    }

    return response.json({ message: action})
});


server.listen(3334, () => {
    console.log('Server is running!');
});

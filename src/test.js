"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Communication_1 = require("./Communication");
var CLI_1 = require("./CLI");
var DNSClient_1 = require("./DNSClient");
var ResponseGenerator_1 = require("./ResponseGenerator");
var Persistance_1 = require("./Persistance");
var OutputLayer_1 = require("./OutputLayer");
var ConsoleOutput_1 = require("./ConsoleOutput");
var FileOutput_1 = require("./FileOutput");
var communication = new Communication_1.Communication();
var persistence = new Persistance_1.Persistence();
var console_ = new ConsoleOutput_1.ConsoleOutput();
var F_out = new FileOutput_1.FileOutput('output.txt');
//const outputLayer = new OutputLayer(F_out);
var outputLayer = new OutputLayer_1.OutputLayer(console_);
var dnsClient = new DNSClient_1.DNSClient();
var responseHandler = function (msg) { return (0, ResponseGenerator_1.handleResponse)(msg, persistence, outputLayer, dnsClient); };
var errorHandler = function (err) { return console.error('Communication error:', err); };
dnsClient.start(communication, persistence);
//communication.run(Buffer.alloc(0), persistence, outputLayer, dnsClient)  //maybe we can take handler input
communication.run(responseHandler, errorHandler);
var cli = new CLI_1.CLI(dnsClient);
cli.run();
/*const fli = new Fli('input.txt',dnsClient);
fli.run();*/
//////////////////////////////////////////// FILE OUTPUT CASE
/*import { Communication } from './Communication';
import { CLI } from './CLI';
import { DNSClient } from './DNSClient';
import { handleResponse } from './ResponseGenerator';
import { Persistence } from './Persistance';
import { OutputLayer } from './OutputLayer';
const outputFilePath = 'output.txt';
const communication = new Communication();
const persistence = new Persistence();
const outputLayer = new OutputLayer(outputFilePath);
const dnsClient = new DNSClient(communication, persistence);

communication.initSockets();
communication.on('message', (msg: Buffer) => handleResponse(msg, persistence, outputLayer, dnsClient));

const cli = new CLI(dnsClient);
cli.run();

*/
//////////////////////////////////////////////NORMAL CLI OUTPUT:
/*
Enter domain: google.com
Enter record type (A, AAAA, CNAME): AAAA
Record type 28
UDP socket listening on 0.0.0.0:42567
Index: 0, Transaction ID: 276, RDATA: 2404:6800:4009:826:0:0:0:200e
TCP socket connected
Enter domain: apple.com
Enter record type (A, AAAA, CNAME): CNAME
Record type 5
Index: 1, Transaction ID: 46795, RDATA not found
Enter domain: apple.com
Enter record type (A, AAAA, CNAME): A
Record type 1
Index: 2, Transaction ID: 44797, RDATA: 17.253.144.10
*/
////////////////////////////////////////////////////////
/* Response handler optional parameter true, output:
Enter domain: google.com
Enter record type (A, AAAA, CNAME): A
Record type 1
UDP socket listening on 0.0.0.0:39830
TCP socket connected
Differnt handler type....
<Buffer 76 da 81 80 00 01 00 01 00 00 00 00 06 67 6f 6f 67 6c 65 03 63 6f 6d 00 00 01 00 01 c0 0c 00 01 00 01 00 00 00 4d 00 04 8e fa 46 4e>
*/ 

"use strict";
// import * as dgram from 'dgram';
// import * as net from 'net';
// import { EventEmitter } from 'events';
// import { CommunicationInterface } from './CommunicationInterface';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Communication = void 0;
// class Communication extends EventEmitter implements CommunicationInterface {
//     private udpSocket: dgram.Socket;
//     private tcpSocket: net.Socket;
//     constructor() {
//         super();
//         this.udpSocket = dgram.createSocket('udp4');
//         this.tcpSocket = new net.Socket();
//     }
//     initComm() {
//         this.udpSocket.on('message', (msg) => {
//             this.emit('message', msg);
//         });
//         this.tcpSocket.on('data', (data) => {
//             this.emit('message', data);
//         });
//         this.udpSocket.on('error', (err) => {
//             console.error('UDP socket error:', err);
//         });
//         this.tcpSocket.on('error', (err) => {
//             console.error('TCP socket error:', err);
//         });
//         this.udpSocket.on('listening', () => {
//             const address = this.udpSocket.address();
//             console.log(`UDP socket listening on ${address.address}:${address.port}`);
//         });
//         this.tcpSocket.connect({ host: '1.1.1.1', port: 53 }, () => {
//             console.log('TCP socket connected');
//         });
//         this.udpSocket.bind(0); 
//     }
//     send(packet: Buffer) {
//         if (packet.length > 512) {
//             this.sendTCP(packet);
//         } else {
//             this.sendUDP(packet);
//         }
//     }
//     sendUDP(packet: Buffer) {
//         this.udpSocket.send(packet, 53, '1.1.1.1', (err) => {
//             if (err) console.error('UDP send error:', err);
//         });
//     }
//     sendTCP(packet: Buffer) {
//         this.tcpSocket.write(packet);
//     }
//     closeComm() {
//         this.udpSocket.close();
//         this.tcpSocket.end();
//     }
// }
// export { Communication };
/*import * as dgram from 'dgram';
import * as net from 'net';
import { EventEmitter } from 'events';
import { CommunicationInterface } from './CommunicationInterface';

class Communication extends EventEmitter implements CommunicationInterface {
    private udpSocket: dgram.Socket;
    private tcpSocket: net.Socket;

    constructor() {
        super();
        this.udpSocket = dgram.createSocket('udp4');
        this.tcpSocket = new net.Socket();
    }

    initComm(onResponse: (msg: Buffer) => void, onError: (err: Error) => void) {
        this.udpSocket.on('message', onResponse);
        this.tcpSocket.on('data', onResponse);

        this.udpSocket.on('error', onError);
        this.tcpSocket.on('error', onError);

        this.udpSocket.on('listening', () => {
            const address = this.udpSocket.address();
            console.log(`UDP socket listening on ${address.address}:${address.port}`);
        });

        this.tcpSocket.connect({ host: '1.1.1.1', port: 53 }, () => {
            console.log('TCP socket connected');
        });

        this.udpSocket.bind(0);
    }

    send(packet: Buffer) {
        if (packet.length > 512) {
            this.sendTCP(packet);
        } else {
            this.sendUDP(packet);
        }
    }

    sendUDP(packet: Buffer) {
        this.udpSocket.send(packet, 53, '1.1.1.1', (err) => {
            if (err) console.error('UDP send error:', err);
        });
    }

    sendTCP(packet: Buffer) {
        this.tcpSocket.write(packet);
    }

    closeComm() {
        this.udpSocket.close();
        this.tcpSocket.end();
    }
}

export { Communication };*/
//////////////////////////////////////////////////////////////////////////////////// MY CODE IMP
// import * as dgram from 'dgram';
// import * as net from 'net';
// import { EventEmitter } from 'events';
// import { CommunicationInterface } from './CommunicationInterface';
// import { PersistenceInterface } from './PersistanceInterface';
// import { DNSClient } from './DNSClient';
// import { handleResponse } from './ResponseGenerator';
// import { OutputLayer } from './OutputLayer';
// class Communication extends EventEmitter implements CommunicationInterface {
//     private udpSocket: dgram.Socket;
//     private tcpSocket: net.Socket;
//     constructor() {
//         super();
//         this.udpSocket = dgram.createSocket('udp4');
//         this.tcpSocket = new net.Socket();
//     }
//     initComm(onResponse: (msg: Buffer) => void, onError: (err: Error) => void) {
//         this.udpSocket.on('message', onResponse);
//         this.tcpSocket.on('data', onResponse);
//         this.udpSocket.on('error', onError);
//         this.tcpSocket.on('error', onError);
//         this.udpSocket.on('listening', () => {
//             const address = this.udpSocket.address();
//             console.log(`UDP socket listening on ${address.address}:${address.port}`);
//         });
//         this.tcpSocket.connect({ host: '1.1.1.1', port: 53 }, () => {
//             console.log('TCP socket connected');
//         });
//         this.udpSocket.bind(0);
//     }
//     /*run(msg: Buffer, persistence: PersistenceInterface, outputLayer: OutputLayer, dnsClient: DNSClient) {
//         this.initComm(
//             (msg: Buffer) => handleResponse(msg, persistence, outputLayer, dnsClient),
//             (err: Error) => console.error('Communication error:', err)
//         );
//     }*/
//     run(handleResponse: (msg: Buffer) => void, handleError: (err: Error) => void) {
//         this.initComm(handleResponse, handleError);
//     }
//     send(packet: Buffer) {
//         if (packet.length > 512) {
//             this.sendTCP(packet);
//         } else {
//             this.sendUDP(packet);
//         }
//     }
//     sendUDP(packet: Buffer) {
//         this.udpSocket.send(packet, 53, '1.1.1.1', (err) => {
//             if (err) console.error('UDP send error:', err);
//         });
//     }
//     sendTCP(packet: Buffer) {
//         this.tcpSocket.write(packet);
//     }
//     closeComm() {
//         this.udpSocket.close();
//         this.tcpSocket.end();
//     }
// }
// export { Communication };
////////////////////////////////////////////////////////////////////////////////////////////////////MY CODE IMP
var events_1 = require("events");
var UDPCommunication_1 = require("./UDPCommunication");
var TCPCommunication_1 = require("./TCPCommunication");
var Communication = /** @class */ (function (_super) {
    __extends(Communication, _super);
    function Communication() {
        var _this = _super.call(this) || this;
        _this.udpCommunication = new UDPCommunication_1.UdpCommunication();
        _this.tcpCommunication = new TCPCommunication_1.TcpCommunication();
        return _this;
    }
    Communication.prototype.initComm = function (onResponse, onError) {
        this.udpCommunication.init(onResponse, onError);
        this.tcpCommunication.init(onResponse, onError);
    };
    Communication.prototype.run = function (handleResponse, handleError) {
        this.initComm(handleResponse, handleError);
    };
    Communication.prototype.send = function (packet) {
        if (packet.length > 512) {
            this.tcpCommunication.send(packet);
        }
        else {
            this.udpCommunication.send(packet);
        }
    };
    Communication.prototype.closeComm = function () {
        this.udpCommunication.close();
        this.tcpCommunication.close();
    };
    return Communication;
}(events_1.EventEmitter));
exports.Communication = Communication;

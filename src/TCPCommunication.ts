import * as net from 'net';
import { EventEmitter } from 'events';

class TcpCommunication extends EventEmitter {
    private tcpSocket: net.Socket;

    constructor() {
        super();
        this.tcpSocket = new net.Socket();
    }

    init(onResponse: (msg: Buffer) => void, onError: (err: Error) => void) {
        this.tcpSocket.on('data', onResponse);
        this.tcpSocket.on('error', onError);

        this.tcpSocket.connect({ host: '1.1.1.1', port: 53 }, () => {
            console.log('TCP socket connected');
        });
    }

    send(packet: Buffer) {
        this.tcpSocket.write(packet);
    }

    close() {
        this.tcpSocket.end();
    }
}

export { TcpCommunication };

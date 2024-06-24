import * as dgram from 'dgram';
import { EventEmitter } from 'events';

class UdpCommunication extends EventEmitter {
    private udpSocket: dgram.Socket;

    constructor() {
        super();
        this.udpSocket = dgram.createSocket('udp4');
    }

    init(onResponse: (msg: Buffer) => void, onError: (err: Error) => void) {
        this.udpSocket.on('message', onResponse);
        this.udpSocket.on('error', onError);

        this.udpSocket.on('listening', () => {
            const address = this.udpSocket.address();
            console.log(`UDP socket listening on ${address.address}:${address.port}`);
        });

        this.udpSocket.bind(0);
    }

    send(packet: Buffer) {
        this.udpSocket.send(packet, 53, '1.1.1.1', (err) => {
            if (err) console.error('UDP send error:', err);
        });
    }

    close() {
        this.udpSocket.close();
    }
}

export { UdpCommunication };

import { DNSClient } from './DNSClient';
import { InputInterface } from './InputInterface';
import { CLI } from './CLI';
import { Fli } from './Fli';

class InputFactory {
    static createInput(type: string, dnsClient: DNSClient, filePath?: string): InputInterface {
        if (type === 'CLI') {
            return new CLI(dnsClient);
        } else if (type === 'File' && filePath) {
            return new Fli(filePath, dnsClient);
        } else {
            throw new Error('Invalid input type or missing file path for file input.');
        }
    }
}

export { InputFactory };

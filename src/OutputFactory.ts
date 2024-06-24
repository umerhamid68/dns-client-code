import { OutputInterface } from './OutputInterface';
import { ConsoleOutput } from './ConsoleOutput';
import { FileOutput } from './FileOutput';
import { OutputLayer } from './OutputLayer';

class OutputFactory {
    static createOutput(type: string, filePath?: string): OutputLayer {
        let output: OutputInterface;

        if (type === 'Console') {
            output = new ConsoleOutput();
        } else if (type === 'File' && filePath) {
            output = new FileOutput(filePath);
        } else {
            throw new Error('Invalid output type or missing file path for file output.');
        }

        return new OutputLayer(output);
    }
}

export { OutputFactory };

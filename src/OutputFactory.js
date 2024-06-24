"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputFactory = void 0;
var ConsoleOutput_1 = require("./ConsoleOutput");
var FileOutput_1 = require("./FileOutput");
var OutputLayer_1 = require("./OutputLayer");
var OutputFactory = /** @class */ (function () {
    function OutputFactory() {
    }
    OutputFactory.createOutput = function (type, filePath) {
        var output;
        if (type === 'Console') {
            output = new ConsoleOutput_1.ConsoleOutput();
        }
        else if (type === 'File' && filePath) {
            output = new FileOutput_1.FileOutput(filePath);
        }
        else {
            throw new Error('Invalid output type or missing file path for file output.');
        }
        return new OutputLayer_1.OutputLayer(output);
    };
    return OutputFactory;
}());
exports.OutputFactory = OutputFactory;

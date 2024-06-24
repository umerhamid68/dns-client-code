"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputFactory = void 0;
var CLI_1 = require("./CLI");
var Fli_1 = require("./Fli");
var InputFactory = /** @class */ (function () {
    function InputFactory() {
    }
    InputFactory.createInput = function (type, dnsClient, filePath) {
        if (type === 'CLI') {
            return new CLI_1.CLI(dnsClient);
        }
        else if (type === 'File' && filePath) {
            return new Fli_1.Fli(filePath, dnsClient);
        }
        else {
            throw new Error('Invalid input type or missing file path for file input.');
        }
    };
    return InputFactory;
}());
exports.InputFactory = InputFactory;

"use strict";
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
exports.TcpCommunication = void 0;
var net = require("net");
var events_1 = require("events");
var TcpCommunication = /** @class */ (function (_super) {
    __extends(TcpCommunication, _super);
    function TcpCommunication() {
        var _this = _super.call(this) || this;
        _this.tcpSocket = new net.Socket();
        return _this;
    }
    TcpCommunication.prototype.init = function (onResponse, onError) {
        this.tcpSocket.on('data', onResponse);
        this.tcpSocket.on('error', onError);
        this.tcpSocket.connect({ host: '1.1.1.1', port: 53 }, function () {
            console.log('TCP socket connected');
        });
    };
    TcpCommunication.prototype.send = function (packet) {
        this.tcpSocket.write(packet);
    };
    TcpCommunication.prototype.close = function () {
        this.tcpSocket.end();
    };
    return TcpCommunication;
}(events_1.EventEmitter));
exports.TcpCommunication = TcpCommunication;

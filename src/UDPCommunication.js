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
exports.UdpCommunication = void 0;
var dgram = require("dgram");
var events_1 = require("events");
var UdpCommunication = /** @class */ (function (_super) {
    __extends(UdpCommunication, _super);
    function UdpCommunication() {
        var _this = _super.call(this) || this;
        _this.udpSocket = dgram.createSocket('udp4');
        return _this;
    }
    UdpCommunication.prototype.init = function (onResponse, onError) {
        var _this = this;
        this.udpSocket.on('message', onResponse);
        this.udpSocket.on('error', onError);
        this.udpSocket.on('listening', function () {
            var address = _this.udpSocket.address();
            console.log("UDP socket listening on ".concat(address.address, ":").concat(address.port));
        });
        this.udpSocket.bind(0);
    };
    UdpCommunication.prototype.send = function (packet) {
        this.udpSocket.send(packet, 53, '1.1.1.1', function (err) {
            if (err)
                console.error('UDP send error:', err);
        });
    };
    UdpCommunication.prototype.close = function () {
        this.udpSocket.close();
    };
    return UdpCommunication;
}(events_1.EventEmitter));
exports.UdpCommunication = UdpCommunication;

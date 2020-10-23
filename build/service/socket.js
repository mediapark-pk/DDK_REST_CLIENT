"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_client_1 = __importDefault(require("socket.io-client"));
const const_1 = require("src/const");
exports.initSocketIOClient = (ip, port) => {
    const protocol = port === const_1.DEFAULT_SSL_PORT ? 'wss' : 'ws';
    console.log(`[Service][Socket] Connecting to ${protocol}://${ip}:${port}`);
    return socket_io_client_1.default(`${protocol}://${ip}:${port}`, {
        timeout: 2000,
        transports: ['websocket'],
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2Uvc29ja2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0VBQWtDO0FBRWxDLHFDQUE2QztBQUVoQyxRQUFBLGtCQUFrQixHQUFHLENBQUMsRUFBVSxFQUFFLElBQVksRUFBeUIsRUFBRTtJQUNsRixNQUFNLFFBQVEsR0FBRyxJQUFJLEtBQUssd0JBQWdCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBRTFELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLFFBQVEsTUFBTSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztJQUUzRSxPQUFPLDBCQUFFLENBQUMsR0FBRyxRQUFRLE1BQU0sRUFBRSxJQUFJLElBQUksRUFBRSxFQUFFO1FBQ3JDLE9BQU8sRUFBRSxJQUFJO1FBQ2IsVUFBVSxFQUFFLENBQUMsV0FBVyxDQUFDO0tBQzVCLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyJ9
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const responseEntity_1 = require("ddk.registry/dist/model/common/responseEntity");
const message_1 = __importStar(require("ddk.registry/dist/model/transport/message"));
const socket_1 = require("src/shared/socket");
class SocketIOClient extends socket_1.SocketClient {
    constructor(socket, event, timeout) {
        super(socket, event, timeout);
        // clear message buffer after reconnect
        const clearSendBufferCallback = () => {
            // @ts-ignore
            socket.sendBuffer = [];
        };
        socket.on('connect', clearSendBufferCallback);
        socket.on('reconnect', clearSendBufferCallback);
    }
    send(code, data) {
        const message = new message_1.default(message_1.MessageType.REQUEST, code, data);
        this.socket.emit(this.event, message);
        return new Promise(resolve => {
            const timeoutId = setTimeout(() => {
                this.messageListeners.delete(message.headers.id);
                resolve(new responseEntity_1.ResponseEntity({ errors: ['Socket timeout'] }));
            }, this.timeout);
            this.messageListeners.set(message.headers.id, (res) => {
                clearTimeout(timeoutId);
                resolve(res);
            });
        });
    }
    get isConnected() {
        return this.socket.connected;
    }
    get uri() {
        return this.socket.io.uri;
    }
}
exports.SocketIOClient = SocketIOClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0SU9DbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2hhcmVkL3NvY2tldElPQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGtGQUErRTtBQUMvRSxxRkFBaUY7QUFFakYsOENBQWlEO0FBRWpELE1BQWEsY0FBNEIsU0FBUSxxQkFBZ0Q7SUFDN0YsWUFBWSxNQUE2QixFQUFFLEtBQWMsRUFBRSxPQUFnQjtRQUN2RSxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUU5Qix1Q0FBdUM7UUFDdkMsTUFBTSx1QkFBdUIsR0FBRyxHQUFHLEVBQUU7WUFDakMsYUFBYTtZQUNiLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQztRQUNGLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLHVCQUF1QixDQUFDLENBQUM7UUFDOUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsSUFBSSxDQUFPLElBQWlCLEVBQUUsSUFBTztRQUNqQyxNQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMscUJBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN6QixNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2pELE9BQU8sQ0FBQyxJQUFJLCtCQUFjLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFakIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQXVCLEVBQUUsRUFBRTtnQkFDdEUsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxJQUFJLEdBQUc7UUFDSCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUM5QixDQUFDO0NBQ0o7QUF0Q0Qsd0NBc0NDIn0=
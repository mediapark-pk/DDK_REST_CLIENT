"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const ddk_registry_1 = __importStar(require("ddk.registry"));
const const_1 = require("src/const");
dotenv_1.default.config();
const workspace = ddk_registry_1.WORKSPACE['1'];
if (!workspace) {
    throw new Error(`[Config] Unknown workspace: ${process.env.WORKSPACE}`);
}
exports.ON_APPLY_TRANSACTION = process.env.ON_APPLY_TRANSACTION;
exports.ON_APPLY_BLOCK = process.env.ON_APPLY_BLOCK;
exports.ON_DECLINE_TRANSACTION = process.env.ON_DECLINE_TRANSACTION;
exports.NUMBER_OF_CONFIRMATIONS = Number(process.env.NUMBER_OF_CONFIRMATIONS) || const_1.DEFAULT_NUMBER_OF_CONFIRMATIONS;
console.log(`[Config] Workspace: ${workspace}`);
ddk_registry_1.default.initialize(workspace);
// @ts-ignore
BigInt.prototype.toJSON = function () {
    return this.toString();
};
// if (process.env.NODE_HOST || process.env.NODE_API_PORT) {
//     const errorMessage = `Please, update the list of nodes in .env file by instruction: ` +
//         `https://github.com/AraiEzzra/DDK.REST.API.CLIENT/blob/master/docs/environment.md#ddk-node-hosts ` +
//         `and remove NODE_HOST, NODE_API_PORT environments`;
//     throw new Error(errorMessage);
// }
const new_node = '128.199.51.200:7008';
const NODE_HOSTS_ENV = new_node;
if (!NODE_HOSTS_ENV) {
    throw new Error(`[Config] NODE_HOSTS is missing`);
}
else {
    console.log(`[Config] NODE_HOSTS: ${NODE_HOSTS_ENV}`);
}
exports.NODE_HOSTS = NODE_HOSTS_ENV.split(',').map(host => {
    const tmp = host.split(':');
    return {
        ip: tmp[0],
        port: Number(tmp[1]),
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxvREFBNEI7QUFDNUIsNkRBQThDO0FBRTlDLHFDQUE0RDtBQUU1RCxnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWhCLE1BQU0sU0FBUyxHQUFHLHdCQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakMsSUFBSSxDQUFDLFNBQVMsRUFBRTtJQUNaLE1BQU0sSUFBSSxLQUFLLENBQUMsK0JBQStCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztDQUMzRTtBQUVZLFFBQUEsb0JBQW9CLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztBQUN4RCxRQUFBLGNBQWMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztBQUM1QyxRQUFBLHNCQUFzQixHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7QUFFNUQsUUFBQSx1QkFBdUIsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLHVDQUErQixDQUFDO0FBRXRILE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFFaEQsc0JBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFMUIsYUFBYTtBQUNiLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHO0lBQ3RCLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzNCLENBQUMsQ0FBQztBQUNGLDREQUE0RDtBQUM1RCw4RkFBOEY7QUFDOUYsK0dBQStHO0FBQy9HLDhEQUE4RDtBQUM5RCxxQ0FBcUM7QUFDckMsSUFBSTtBQUNKLE1BQU0sUUFBUSxHQUFHLHFCQUFxQixDQUFBO0FBQ3RDLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQztBQUNoQyxJQUFJLENBQUMsY0FBYyxFQUFFO0lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztDQUNyRDtLQUFNO0lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsY0FBYyxFQUFFLENBQUMsQ0FBQztDQUN6RDtBQUVZLFFBQUEsVUFBVSxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQzNELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFNUIsT0FBTztRQUNILEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ1YsSUFBSSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdkIsQ0FBQztBQUNOLENBQUMsQ0FBQyxDQUFDIn0=
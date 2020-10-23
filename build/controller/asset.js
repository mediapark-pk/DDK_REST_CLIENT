"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { nodePool } from "src/service";
class AssetController {
    async createStakeAsset(req, res) {
        console.log("asset body", req.body);
        console.log("asset params", req.params);
        const response = 'Hello';
        // const response = await nodePool.send(
        //   // API_ACTION_TYPES.CREATE_STAKE_ASSET,
        //   req.body
        // );
        return res.send(response);
    }
    async createVoteAsset(req, res) {
        console.log("data get", req.body);
        const response = 'Hello';
        // const response = await nodePool.send(
        //   API_ACTION_TYPES.CREATE_VOTE_ASSET,
        //   req.body
        // );
        return res.send(response);
    }
}
exports.AssetController = AssetController;
exports.assetController = new AssetController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlci9hc3NldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLDBDQUEwQztBQUcxQyxNQUFhLGVBQWU7SUFFMUIsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEdBQVksRUFBRSxHQUFhO1FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDdEMsTUFBTSxRQUFRLEdBQUMsT0FBTyxDQUFBO1FBQ3RCLHdDQUF3QztRQUN4Qyw0Q0FBNEM7UUFDNUMsYUFBYTtRQUNiLEtBQUs7UUFDTCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUdELEtBQUssQ0FBQyxlQUFlLENBQUMsR0FBWSxFQUFFLEdBQWE7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sUUFBUSxHQUFDLE9BQU8sQ0FBQTtRQUN0Qix3Q0FBd0M7UUFDeEMsd0NBQXdDO1FBQ3hDLGFBQWE7UUFDYixLQUFLO1FBQ0wsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRjtBQXZCRCwwQ0F1QkM7QUFDWSxRQUFBLGVBQWUsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDIn0=
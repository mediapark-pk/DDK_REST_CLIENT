"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responseEntity_1 = require("ddk.registry/dist/model/common/responseEntity");
const repository_1 = require("src/repository");
class BlockchainController {
    getInfo(_req, res) {
        const data = repository_1.blockchainRepository.getInfo();
        return res.send(new responseEntity_1.ResponseEntity({ data }));
    }
    getCirulatingSupply(_req, res) {
        const data = repository_1.blockchainRepository.getInfo();
        const data1 = {
            'success': true,
            'data': {
                'circulatingSupply': data.circulatingSupply
            }
        };
        return res.send(data1);
    }
    getTotalSupply(_req, res) {
        const data = repository_1.blockchainRepository.getInfo();
        const data1 = {
            'success': true,
            'data': {
                'totalSupply': data.totalSupply
            }
        };
        return res.send(data1);
    }
}
exports.BlockchainController = BlockchainController;
exports.blockchainController = new BlockchainController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2tjaGFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyL2Jsb2NrY2hhaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxrRkFBK0U7QUFFL0UsK0NBQXNEO0FBRXRELE1BQWEsb0JBQW9CO0lBQzdCLE9BQU8sQ0FBQyxJQUFhLEVBQUUsR0FBYTtRQUNoQyxNQUFNLElBQUksR0FBRyxpQ0FBb0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUU1QyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSwrQkFBYyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDRCxtQkFBbUIsQ0FBQyxJQUFhLEVBQUUsR0FBYTtRQUM1QyxNQUFNLElBQUksR0FBRyxpQ0FBb0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QyxNQUFNLEtBQUssR0FBRztZQUNWLFNBQVMsRUFBRSxJQUFJO1lBQ2YsTUFBTSxFQUFDO2dCQUNQLG1CQUFtQixFQUFFLElBQUksQ0FBQyxpQkFBaUI7YUFDMUM7U0FDSixDQUFBO1FBQ0QsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzFCLENBQUM7SUFDRCxjQUFjLENBQUMsSUFBYSxFQUFFLEdBQWE7UUFDdkMsTUFBTSxJQUFJLEdBQUcsaUNBQW9CLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUMsTUFBTSxLQUFLLEdBQUc7WUFDVixTQUFTLEVBQUUsSUFBSTtZQUNmLE1BQU0sRUFBRTtnQkFDSixhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVc7YUFDbEM7U0FDSixDQUFBO1FBQ0QsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzFCLENBQUM7Q0FDSjtBQTFCRCxvREEwQkM7QUFFWSxRQUFBLG9CQUFvQixHQUFHLElBQUksb0JBQW9CLEVBQUUsQ0FBQyJ9
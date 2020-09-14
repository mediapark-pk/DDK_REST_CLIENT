import { Request, Response } from 'express';
import { ResponseEntity } from 'ddk.registry/dist/model/common/responseEntity';

import { blockchainRepository } from 'src/repository';

export class BlockchainController {
    getInfo(_req: Request, res: Response): Response {
        const data = blockchainRepository.getInfo();

        return res.send(new ResponseEntity({ data }));
    }
    getCirulatingSupply(_req: Request, res: Response):Response{
        const data = blockchainRepository.getInfo();
        const data1 = {
            'success': true,
            'data':{
            'circulatingSupply': data.circulatingSupply
            }
        }
        return res.send(data1)
    }
    getTotalSupply(_req: Request, res: Response):Response{
        const data = blockchainRepository.getInfo();
        const data1 = {
            'success': true,
            'data': {
                'totalSupply': data.totalSupply
            }
        }
        return res.send(data1)
    }
}

export const blockchainController = new BlockchainController();

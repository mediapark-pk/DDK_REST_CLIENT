import { Request, Response } from 'express';
import { ResponseEntity } from 'ddk.registry/dist/model/common/responseEntity';

import { blockchainRepository } from 'src/repository';

export class BlockchainController {
    getInfo(_req: Request, res: Response): Response {
        const data = blockchainRepository.getInfo();

        return res.send(new ResponseEntity({ data }));
    }
    getCirulatingSupply(_req: Request, res: Response):Response{
        const data1 = blockchainRepository.getInfo();
        const data = data1.circulatingSupply
        return res.send(new ResponseEntity({data}))
    }
    getTotalSupply(_req: Request, res: Response):Response{
        const data1 = blockchainRepository.getInfo();
        const data = data1.totalSupply
        return res.send(new ResponseEntity({data}))
    }
}

export const blockchainController = new BlockchainController();

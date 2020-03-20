import express from 'express';

import { airdropHistoryController } from 'src/controller/airdropHistory';

export const airdropRouter = express.Router();

airdropRouter.get('/', airdropHistoryController.getHistory);
airdropRouter.get('/:referralAddress', airdropHistoryController.getAirdropDailyHistory);


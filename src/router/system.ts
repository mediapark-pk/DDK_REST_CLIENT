import express from 'express';

import { systemController } from 'src/controller/system';

export const systemRouter = express.Router();

systemRouter.get('/info', systemController.getInfo);
systemRouter.get('/getAccountHistory',systemController.getAccountHistory)
systemRouter.get('/:id',systemController.getBlockHistory)
systemRouter.get('/getUnconfirmedTransactionHistory',systemController.getAllUnconfirmedTransactions)
systemRouter.get('/getTransactionHistiory',systemController.getTransactionHistory)

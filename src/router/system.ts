import express from 'express';

import { systemController } from 'src/controller/system';

export const systemRouter = express.Router();

systemRouter.get('/info', systemController.getInfo);
systemRouter.get('/getAccountHistory/:address',systemController.getAccountHistory)
systemRouter.get('/:id',systemController.getBlockHistory)
systemRouter.post('/getUnconfirmedTransactionHistory',systemController.getAllUnconfirmedTransactions)
systemRouter.get('/getTransactionHistiory:/id',systemController.getTransactionHistory)

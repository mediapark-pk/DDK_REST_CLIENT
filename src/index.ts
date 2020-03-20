import express from 'express';
import bodyParser from 'body-parser';

import 'src/config';
import 'src/service';

import { transactionRouter } from 'src/router/transaction';
import { accountRouter } from 'src/router/account';
import { utilRouter } from 'src/router/util';
import { webhookRouter } from 'src/router/webhook';
import { blockRouter } from 'src/router/block';
import { systemRouter } from 'src/router/system';
import { blockchainRouter } from 'src/router/blockchain';
import { airdropRouter } from './router/airdropHistory';
import { assetRouter } from './router/asset';
import { roundRouter } from './router/rounds';
import { rewardRouter } from './router/rewards';
import { tracingRouter } from './router/tracing';
import { delegatesRouter } from './router/delegates';
import { referredUsersRouter } from './router/referredUsers';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/transactions', transactionRouter);
app.use('/api/blocks', blockRouter);
app.use('/api/accounts', accountRouter);
app.use('/api/utils', utilRouter);
app.use('/api/webhook', webhookRouter);
app.use('/api/blockchain', blockchainRouter);
app.use('/api/system', systemRouter);
app.use('/api/airdrop',airdropRouter);
app.use('/api/asset',assetRouter);
app.use('/api/rounds',roundRouter);
app.use('/api/reward',rewardRouter);
app.use('/api/tracing',tracingRouter);
app.use('/api/delegates',delegatesRouter);
app.use('/api/referredUsers',referredUsersRouter);


app.listen(process.env.SERVER_PORT, () => {
    console.log(`[DDK][RestAPI] Listening on port ${process.env.SERVER_PORT}!`);
});

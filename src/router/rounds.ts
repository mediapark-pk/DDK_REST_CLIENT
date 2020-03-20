import express from 'express';
import {roundController  } from 'src/controller/round';

export const roundRouter = express.Router();

roundRouter.get('/currentRound',roundController.GetCurrentRound);
roundRouter.post('/currentRoundDelegates',roundController.getCurrentRoundDelegates);
roundRouter.post('/getRound',roundController.getRound);
roundRouter.post('/',roundController.getRounds);


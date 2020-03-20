import express from 'express';
import { rewardController } from 'src/controller/reward';

export const rewardRouter = express.Router();

rewardRouter.post('/getReferredUsersReward',rewardController.getReferredUsersRewards);
rewardRouter.post('/getStakeRewards',rewardController.getStakeRewards);


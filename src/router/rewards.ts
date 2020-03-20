import express from 'express';
import { rewardController } from 'src/controller/reward';

export const rewardRouter = express.Router();

rewardRouter.get('/getReferredUsersReward',rewardController.getReferredUsersRewards);
rewardRouter.get('/getStakeRewards',rewardController.getStakeRewards);


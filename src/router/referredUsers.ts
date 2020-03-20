import express from 'express';
import { referredUsersController } from 'src/controller/referredUsers';


export const referredUsersRouter = express.Router();

referredUsersRouter.get('/',referredUsersController.getReferedUsers);


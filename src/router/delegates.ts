import express from 'express';
import { delegatesController } from 'src/controller/delegates';


export const delegatesRouter = express.Router();

delegatesRouter.post('/',delegatesController.getDelegates);
delegatesRouter.post('/activeDelegates', delegatesController.getActiveDelegates);
delegatesRouter.post('/myDelegates', delegatesController.getMydelegates);


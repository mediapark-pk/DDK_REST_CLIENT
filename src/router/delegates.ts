import express from 'express';
import { delegatesController } from 'src/controller/delegates';


export const delegatesRouter = express.Router();

delegatesRouter.get('/',delegatesController.getDelegates);
delegatesRouter.get('/activeDelegates', delegatesController.getActiveDelegates);
delegatesRouter.get('/myDelegates', delegatesController.getMydelegates);


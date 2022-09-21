import { Router } from 'express';
import { listAllController } from '../controllers/order';

const routerOrder = Router();

routerOrder.get('/', listAllController);

export default routerOrder;
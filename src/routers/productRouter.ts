import { Router } from 'express';
import { createController, listAllController } from '../controllers/product';

const routerProduct = Router();

routerProduct.post('/', createController);
routerProduct.get('/', listAllController);

export default routerProduct;
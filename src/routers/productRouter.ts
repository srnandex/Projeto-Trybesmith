import { Router } from 'express';
import { createController } from '../controllers/product';

const routerProduct = Router();

routerProduct.post('/', createController);

export default routerProduct;
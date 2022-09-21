import { Router } from 'express';
import { createController } from '../controllers/users';

const routerUsers = Router();

routerUsers.post('/', createController);

export default routerUsers;
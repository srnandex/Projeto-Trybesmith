import { Request, Response } from 'express';
import { listAllService } from '../services/order';

export const listAllController = async (_req: Request, res: Response) => {
  console.log('ANTES CONTROLLER');
  const allOrder = await listAllService();
  console.log(allOrder);
  
  console.log('DEPOIS CONTROLER');
  res.status(200).json(allOrder);
};

export default listAllController;

import { Request, Response } from 'express';
import { createService, listAllService } from '../services/product';

export const createController = async (req: Request, res: Response) => {
  const produto = req.body;
  const addPro = await createService(produto);
  res.status(201).json(addPro);
};

export const listAllController = async (_req: Request, res: Response) => {
  console.log('ANTES CONTROLLER');
  const allPro = await listAllService();
  console.log(allPro);
  
  console.log('DEPOIS CONTROLER');
  res.status(200).json(allPro);
};

import { Request, Response } from 'express';
import { createService } from '../services/product';

export const createController = async (req: Request, res: Response) => {
  const produto = req.body;
  const addPro = await createService(produto);
  res.status(201).json(addPro);
};

export default createController;
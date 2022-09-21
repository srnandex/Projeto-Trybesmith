import { Request, Response } from 'express';
import { createService } from '../services/users';

export const createController = async (req: Request, res: Response) => {
  const user = req.body;
  const addUser = await createService(user);
  console.log(addUser);
  
  res.status(201).json({ token: addUser });
};

export default createController;

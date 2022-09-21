import jwt from 'jsonwebtoken';
import { createModel } from '../models/users';
import { UserAdd } from '../interfaces/users.interfaces';

const secret = 'xablau';

export const createService = async (produto: UserAdd) => {
  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  const result = await createModel(produto);
  
  const token: string = jwt.sign(result, secret, { expiresIn: '1d', algorithm: 'HS256' });
  return token;
};

export default createService;

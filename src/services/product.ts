import createModel from '../models/Product';
import { ProductAdd } from '../interfaces/product.interface';

export const createService = async (produto: ProductAdd): Promise<ProductAdd> => {
  const result = await createModel(produto);
  
  return result;
};

export default createService;
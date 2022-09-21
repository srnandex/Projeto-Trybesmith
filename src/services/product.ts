import { createModel, listAllModel } from '../models/Product';
import { ProductAdd } from '../interfaces/product.interface';

export const createService = async (produto: ProductAdd): Promise<ProductAdd> => {
  const result = await createModel(produto);
  
  return result;
};

export const listAllService = async () => {
  console.log('serviceeeeeeeeeee');
    
  const result = await listAllModel();
  console.log(result);
  
  console.log('serviceeeeeeeeeee depois modeeeelll');
  return result;
};

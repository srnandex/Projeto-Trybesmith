import { listAllModel } from '../models/order';

export const listAllService = async () => {
  const result = await listAllModel();
  return result;
};

export default listAllService;

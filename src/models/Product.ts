import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { ProductList, ProductAdd } from '../interfaces/product.interface';

// type ProductData = {
//   id: number,
//   name: string,
//   amount: string,
// } & RowDataPacket;

export const createModel = async (produto: ProductAdd):Promise<ProductList> => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [produto.name, produto.amount],
  );

  return {
    id: result.insertId,
    name: produto.name,
    amount: produto.amount,
  };
};

export default createModel;

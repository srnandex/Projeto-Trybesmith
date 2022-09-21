import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { ProductAdd } from '../interfaces/product.interface';

type ProductData = {
  id: number,
  name: string,
  amount: string,
  orderId: number | null,
} & RowDataPacket;

export const createModel = async (produto: ProductAdd) => {
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

export const listAllModel = async () => {
  console.log('modeeeellll anteeeesssss');
  const [result] = await connection.execute<ProductData[]>(
    'SELECT * FROM Trybesmith.Products',
  );
  console.log(result);
  
  console.log('modeeeellll deoisssssss');
  return result;
};

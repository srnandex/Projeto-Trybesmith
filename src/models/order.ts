import { RowDataPacket } from 'mysql2/promise';
import connection from './connection';

type OrderData = {
  id: number,
  userId: number,
} & RowDataPacket;

export const listAllModel = async () => {
  const query = `SELECT ord.id, ord.userId, JSON_ARRAYAGG(prod.id) 
                 AS productsIds
                 FROM Trybesmith.Orders AS ord
                 INNER JOIN Trybesmith.Products AS prod
                 ON prod.orderId = ord.id
                 GROUP BY ord.id
                 ORDER BY ord.userId`;
  const [result] = await connection.execute<OrderData[]>(query);
  return result;
};

export default listAllModel;

import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { UserAdd } from '../interfaces/users.interfaces';

export const createModel = async (user: UserAdd) => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [user.username, user.classe, user.level, user.password],
  );

  return {
    id: result.insertId,
    username: user.username,
    classe: user.classe,
    level: user.level,
    password: user.password,
  };
};

export default createModel;
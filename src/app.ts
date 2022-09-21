import express from 'express';
import routerProduct from './routers/productRouter';
import routerUsers from './routers/usersRouter';

const app = express();

app.use(express.json());

app.use('/products', routerProduct);
app.use('/users', routerUsers);

export default app;

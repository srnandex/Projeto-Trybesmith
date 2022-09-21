import express from 'express';
import routerProduct from './routers/productRouter';
import routerUsers from './routers/usersRouter';
import routerOrder from './routers/orderRouter';

const app = express();

app.use(express.json());

app.use('/products', routerProduct);
app.use('/users', routerUsers);
app.use('/orders', routerOrder);

export default app;

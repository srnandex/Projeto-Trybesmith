import express from 'express';
import routerProduct from './routers/productRouter';

const app = express();

app.use(express.json());

app.use('/products', routerProduct);

export default app;

import { Router } from 'express';

import ProductsRouter from './products.routes';

const routes = Router();

routes.use('/products', ProductsRouter);

export default routes;

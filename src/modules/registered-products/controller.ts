import { Request, Response } from 'express';
import { createMultipleProducts } from '../products';

const productData = {
  RegisteredProducts: createMultipleProducts(5)
};

export default (req: Request, res: Response) => {
  setTimeout(() => res.send(productData), 1000);
};

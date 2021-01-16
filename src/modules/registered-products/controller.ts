import { Request, Response } from 'express';
import delay from '../../utils/delay';
import { createMultipleProducts } from '../products';

const productData = {
  RegisteredProducts: createMultipleProducts(5)
};

export default (req: Request, res: Response) => {
  delay(2000).then(() => res.send(productData));
};

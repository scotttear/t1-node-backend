import { Request, Response } from 'express';
import delay from '../../utils/delay';
import { d2CProductData } from './model';

const d2cProductController = (req: Request, res: Response) => {
  console.log(req.query);

  delay(500).then(() => res.send(d2CProductData));
};

export { d2cProductController };

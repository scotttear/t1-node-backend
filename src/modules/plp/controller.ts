import { Request, Response } from 'express';
import delay from '../../utils/delay';
import { plpData } from './model';

export default (req: Request, res: Response) => {
  console.log(req.params);

  delay(2000).then(() => res.send(plpData));
};

import { Request, Response } from 'express';
import delay from '../../utils/delay';
import { noSlotsData, slotsData } from './model';

export default (req: Request, res: Response) => {
  const { Address } = req.body;

  if (Address === '1 No Slots Road') {
    return delay(2000).then(() => res.send(noSlotsData));
  }

  delay(2000).then(() => res.send(slotsData));
};

import { Request, Response } from 'express';
import delay from '../../utils/delay';
import { retailersHtml, overlaysErrorHtml } from './model';

const retailersOverlayController = (req: Request, res: Response) => {
  const { q } = req.query;

  if (q === 'ER1111') {
    return delay(2500).then(() => res.send(overlaysErrorHtml));
  }

  delay(2000).then(() => res.send(retailersHtml));
};

export { retailersOverlayController };

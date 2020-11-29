import { Application } from 'express';
import searchResultsController from '../modules/product-search-results/controller';
import registeredProductsController from '../modules/registered-products/controller';
import slotsController from '../modules/slots/controller';
import {
  serviceBookingRetrieveController,
  serviceBookingUpdateController
} from '../modules/service-booking/controller';

export default (app: Application) => {
  // Products for standard product search
  app.get('/products', searchResultsController);

  // Registered products for logged user
  app.get('/registered-products', registeredProductsController);

  // Slots calendar data
  app.post('/slots', slotsController);

  // Get appointment details via booking form
  app.post('/booking/retrieve', serviceBookingRetrieveController);

  // Update appointment details via booking form
  app.post('/booking/update', serviceBookingUpdateController);
};

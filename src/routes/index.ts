import { Application } from 'express';
import searchResultsController from '../modules/product-search-results/controller';
import registeredProductsController from '../modules/registered-products/controller';
import slotsController from '../modules/slots/controller';
import { retailersOverlayController } from '../modules/overlays/controller';
import { d2cProductController } from '../modules/d2c/controller';
import plpController from '../modules/plp/controller';
import {
  submitBookingController,
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

  // Submit a booking form
  app.post('/booking/submit', submitBookingController);

  // Get appointment details via booking form
  app.post('/booking/retrieve', serviceBookingRetrieveController);

  // Update appointment details via booking form
  app.post('/booking/update', serviceBookingUpdateController);

  // Overlays
  app.get('/overlays/online-retailer', retailersOverlayController);

  // plp (ccv2 api)
  app.get('/plp', plpController);

  // D2c
  app.get('/d2c/get-product', d2cProductController);
};

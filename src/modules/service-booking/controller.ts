import { Request, Response } from 'express';
import delay from '../../utils/delay';

const bookingErrorData = {
  Success: false,
  Error: 'Booking error',
};

const bookingSubmittedData = {
  Success: true,
  BookingConfirmationId: '54321',
  TimeZoneUtcOffset: 'Z',
};

const bookingSuccessNoData = {
  Success: true,
  Error: null,
  Errors: null,
  RedirectUrl: null,
};

const bookingData = {
  Id: '98765432',
  AppointmentGuid: '4567ghj-345678sdfghj-dfgvbhnj',
  Street: '45 System Street',
  City: 'London',
  PostalCode: 'E1 2CM',
  SlotDate: '2020-12-17',
  SlotFrom: '08:00',
  SlotKey: '637196832000000000_637196976000000000',
  SlotTo: '12:00',
  Pnc: '98765432',
};

const submitBookingController = (req: Request, res: Response) => {
  const badRequest = false;

  if (badRequest) {
    return delay(3000).then(() => res.send(bookingErrorData));
  }

  delay(3000).then(() => res.send(bookingSubmittedData));
};

const serviceBookingRetrieveController = (req: Request, res: Response) => {
  const badRequest = false;

  if (badRequest) {
    return delay(2000).then(() => res.send(bookingErrorData));
  }

  delay(2000).then(() => res.send(bookingData));
};

const serviceBookingUpdateController = (req: Request, res: Response) => {
  const badRequest = false;

  if (badRequest) {
    return delay(1500).then(() => res.send(bookingErrorData));
  }

  delay(1500).then(() => res.send(bookingSuccessNoData));
};

export {
  submitBookingController,
  serviceBookingRetrieveController,
  serviceBookingUpdateController
};

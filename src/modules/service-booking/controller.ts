import { Request, Response } from 'express';

const bookingErrorData = {
  Error: 'No booking found.',
};

const bookingData = {
  street: '45 System Street',
  city: 'London',
  postalCode: 'E1 2CM',
  slotDate: '2020-12-17',
  slotFrom: '08:00',
  slotKey: '637196832000000000_637196976000000000',
  slotTo: '12:00',
};

const serviceBookingRetrieveController = (req: Request, res: Response) => {
  if (req.body.appointmentId === '111111111') {
    return setTimeout(() => res.send(bookingErrorData), 2000);
  }

  // Delay to mirror a real world response
  setTimeout(() => res.send(bookingData), 2000);
};

const serviceBookingUpdateController = (req: Request, res: Response) => {
  const id = req.body.AppointmentGuid;
  const pnc = req.body.Pnc;

  // Delay to mirror a real world response
  setTimeout(() => res.send({ message: `Booking id: ${id} has been updated with pnc: ${pnc}` }), 2000);
};

export {
  serviceBookingRetrieveController,
  serviceBookingUpdateController
}

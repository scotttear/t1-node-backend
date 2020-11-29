import { Request, Response } from 'express';

const noSlotsData = {
  ServiceProviderType: 'FieldService',
  SlotDays: [],
  TaskId: 100,
  ServiceAppointmentId: 200,
  AdjustedSelectedDate: null,
  Status: 2
};

const slotsData = {
  SlotDays: [
    {
      DayName: 'thursday december 17, 2020',
      Date: '2020-12-17',
      AvailableSlots: [
        {
          SlotFrom: '08:00',
          SlotTo: '12:00',
          SlotKey: '637196832000000000_637196976000000000',
        },
        {
          SlotFrom: '08:00',
          SlotTo: '16:00',
          SlotKey: '637196832000000000_637197120000000000',
        },
        {
          SlotFrom: '12:00',
          SlotTo: '16:00',
          SlotKey: '637196976000000000_637197120000000000',
        },
      ],
    },
    {
      DayName: 'friday december 18, 2020',
      Date: '2020-12-18',
      AvailableSlots: [
        {
          SlotFrom: '08:00',
          SlotTo: ' 12:00',
          SlotKey: '637199424000000000_637199568000000000',
        },
        {
          SlotFrom: '12:00',
          SlotTo: '16:00',
          SlotKey: '637199568000000000_637199712000000000',
        },
      ],
    },
  ],
  TaskId: 100,
  ServiceAppointmentId: 200,
  AdjustedSelectedDate: '2020-11-20',
  Status: 0,
  ServiceProviderType: 'SA'
};

export default (req: Request, res: Response) => {
  console.log(req.body);

  if (req.body.Address === '1 No Slots Road') {
    return res.send(noSlotsData);
  }

  // Delay to mirror a real world response
  setTimeout(() => res.send(slotsData), 1500);
};

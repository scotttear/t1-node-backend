interface SlotsData {
  SlotDays: object[];
  TaskId: number;
  ServiceAppointmentId: number;
  AdjustedSelectedDate: string | null;
  Status: number;
  ServiceProviderType: string;
};

const noSlotsData: SlotsData = {
  SlotDays: [],
  TaskId: 100,
  ServiceAppointmentId: 200,
  AdjustedSelectedDate: null,
  Status: 2,
  ServiceProviderType: 'FieldService',
};

const slotsData: SlotsData = {
  SlotDays: [
    {
      DayName: 'thursday december 17, 2020',
      Date: '2020-12-17',
      AvailableSlots: [
        {
          SlotFrom: '08:00',
          SlotTo: '12:00',
          SlotKey: '666777_1000',
        },
        {
          SlotFrom: '08:00',
          SlotTo: '16:00',
          SlotKey: '666777_2000',
        },
        {
          SlotFrom: '12:00',
          SlotTo: '16:00',
          SlotKey: '666777_3000',
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
          SlotKey: '666777_4000',
        },
        {
          SlotFrom: '12:00',
          SlotTo: '16:00',
          SlotKey: '666777_5000',
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

export {
  noSlotsData,
  slotsData,
};

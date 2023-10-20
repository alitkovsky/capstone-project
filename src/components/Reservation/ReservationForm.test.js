import { initializeTimes } from './components/BookingForm';
import { updateTimes } from './components/BookingForm';

describe('initializeTimes', () => {
   it('returns an array of available times', () => {
      const times = initializeTimes();
      expect(times).toEqual([
         "17:00",
         "18:00",
         "19:00",
         "20:00",
         "21:00",
         "22:00"
      ]);
   });
});

describe('updateTimes', () => {
   it('returns the same state provided as an argument', () => {
      const times = updateTimes("18:00");
      expect(times).toEqual([
         "17:00",
         "19:00",
         "20:00",
         "21:00",
         "22:00"
      ]);
   });
});
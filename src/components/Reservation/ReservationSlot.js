import React from 'react';

const BookingSlot = ({ time, handleTimeChange }) => {
   return (
      <option value={time} onChange={handleTimeChange}>
         {time}
      </option>
   );
};

export default BookingSlot;
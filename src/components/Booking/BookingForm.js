import React, { useState } from "react";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
   const [date, setDate] = useState("");
   const [selectedTime, setSelectedTime] = useState("");
   const [guests, setGuests] = useState(1);
   const [occasion, setOccasion] = useState("birthday");

   const handleDateChange = (e) => {
      const newDate = e.target.value;
      setDate(newDate);
   };

   const handleTimeChange = (e) => {
      const newTime = e.target.value;
      setSelectedTime(newTime);
   };

   const handleGuestsChange = (e) => {
      setGuests(e.target.value);
   };

   const handleOccasionChange = (e) => {
      setOccasion(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const formData = {
         date,
         time: selectedTime,
         guests,
         occasion
      };
      submitForm(formData);
   };

   return (
      <>
         <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
               type="date"
               id="res-date"
               name="date"
               value={date}
               onChange={handleDateChange}
               aria-labelledby="date-label"
            />

            <label htmlFor="res-time">Choose time</label>
            <select
               id="res-time"
               value={selectedTime}
               onChange={handleTimeChange}
               aria-labelledby="time-label"
            >
               {availableTimes.map((dateSlot) => (
                  dateSlot.times.map((timeSlot) => (
                     <option
                        key={timeSlot}
                        value={timeSlot}
                     >
                        {timeSlot}
                     </option>
                  ))
               ))};
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
               type="number"
               id="guests"
               name="guests"
               min="1"
               max="10"
               placeholder="1"
               value={guests}
               onChange={handleGuestsChange}
               aria-labelledby="guests-label"
            />
            <label htmlFor="occasion">Occasion</label>
            <select
               id="occasion"
               name="occasion"
               value={occasion}
               onChange={handleOccasionChange}
               aria-labelledby="occasion-label"
            >
               <option value="birthday">Birthday</option>
               <option value="anniversary">Anniversary</option>
            </select>
            <input
               type="submit"
               value="Book now"
            />
         </form>
      </>
   );
};

export default BookingForm;
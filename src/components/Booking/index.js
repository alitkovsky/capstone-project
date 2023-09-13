import React, { useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { fetchAvailableSlots, submitAPI } from '../../api/fakeAPI';

import BookingForm from './BookingForm';

const initialAvailableTimes = [];

const availableTimesReducer = (state, action) => {
   if (action.type === 'UPDATE_AVAILABLE_TIMES') {
      return action.payload;
   }
   return state;
};

const BookingPage = () => {
   const [availableTimes, dispatch] = useReducer(
      availableTimesReducer,
      initialAvailableTimes
   );

   useEffect(() => {
   fetchAvailableSlots()
      .then((slots) => {
         dispatch({
            type: 'UPDATE_AVAILABLE_TIMES',
            payload: slots
            });
      })
      .catch((error) => {
         alert('There was an error fetching available times. Please try again.', error);
      });
   }, []);

   const navigate = useNavigate();

   const submitForm = async (formData) => {
      const submitSuccess = await submitAPI(formData);

      if (submitSuccess) {
         navigate('/confirmed');
      } else {
         alert('There was an error submitting your booking. Please try again.');
      }
   };

   return (
      <>
         <div>
            <h1>Restaurant Reservations</h1>
            <BookingForm
               availableTimes={availableTimes}
               dispatch={dispatch}
               submitForm={submitForm}
            />
         </div>
      </>
   );
};

export default BookingPage;
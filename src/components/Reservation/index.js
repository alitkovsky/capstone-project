import React, { useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { fetchAvailableSlots, submitAPI } from "../../api/fakeAPI";

import ReservationForm from "./ReservationForm";
import "./index.css";

const initialAvailableTimes = [];

const availableTimesReducer = (state, action) => {
   if (action.type === "UPDATE_AVAILABLE_TIMES") {
      return action.payload;
   }
   return state;
};

const ReservationPage = () => {
   const [availableTimes, dispatch] = useReducer(
      availableTimesReducer,
      initialAvailableTimes
   );

   useEffect(() => {
   fetchAvailableSlots()
      .then((slots) => {
         dispatch({
            type: "UPDATE_AVAILABLE_TIMES",
            payload: slots
            });
      })
      .catch((error) => {
         alert("There was an error fetching available times. Please try again.", error);
      });
   }, []);

   const navigate = useNavigate();

   const submitForm = async (formData) => {
      const submitSuccess = await submitAPI(formData);

      if (submitSuccess) {
         navigate("/confirmed");
      } else {
         alert("There was an error submitting your booking. Please try again.");
      }
   };

   return (
      <>
         <section className="reservation grid">
         <div className="reservation-container grid container">
            <div className="reservation-description grid">
                  <h1>Let"s reserve a table!</h1>
                  <h2>Here you can choose available date and time, desired number of guests. And, please, don"t forget to choose your occasion!</h2>
            </div>

            <div className="reservation-form grid">
               <h1>Reservation</h1>
               <ReservationForm
                  availableTimes={availableTimes}
                  dispatch={dispatch}
                  submitForm={submitForm}
               />
            </div>
         </div>
         </section>
      </>
   );
};

export default ReservationPage;
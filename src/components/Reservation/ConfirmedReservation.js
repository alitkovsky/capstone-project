import React from "react";

import "./ConfirmedReservation.css";

import confirmedReservationImg from "./assets/chefs-mario-and-adrian_a.jpg";

const ConfirmedReservation = () => {
  const srca = confirmedReservationImg;

  return (
    <>
      <section className="confirmed-reservation grid">
        <div className="confirmed-reservation-container grid container">
            <div className="confirmed-reservation-description grid">
                  <h1>Booking Confirmed!</h1>
                  <h2>Your reservation has been successfully confirmed.</h2>
            </div>

          <div className="confirmed-reservation-image">
              <img
                className="confirmed-reservation-image"
                src={srca}
                alt="Little Lemon Restaurant"
              />
          </div>

        </div>
      </section>
    </>
  );
};

export default ConfirmedReservation;
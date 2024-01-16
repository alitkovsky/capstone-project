import React from "react";

import "./UnderConstruction.css";

import aboutImgUrla from "./Home/assets/chefs-mario-and-adrian_a.jpg";

function UnderConstruction() {
  const srca = aboutImgUrla;

  return (
    <>
      <section className="underconstruction">
        <div className="underconstruction-container grid container">
          <div className="underconstruction-description grid">
                <h1>Sorry!</h1>
                <h2>This section of Little Lemon Restaurant is now under counstruction.</h2>
                <p>We"ll do our best to fix it ASAP.</p>
          </div>

          <div className="underconstruction-image">
              <img
                className="underconstruction-image"
                src={srca}
                alt="Little Lemon Restaurant"
              />
          </div>
        </div>
      </section>
    </>
  );
};

export default UnderConstruction;
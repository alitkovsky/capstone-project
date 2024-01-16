import React from "react";

import "./NotFound.css";

import aboutImgUrla from "./Home/assets/chefs-mario-and-adrian_a.jpg";

function NotFound() {
  const srca = aboutImgUrla;

  return (
    <>
         <section className="notfound">
            <div className="notfound-container grid container">
               <div className="notfound-description grid">
                     <h1>Sorry!</h1>
                     <h2>This section of Little Lemon Restaurant can not be found.</h2>
                     <p>You still can use our naigation bar or try to start form <a href="/"> the very beginning.</a></p>
               </div>

              <div className="notfound-image">
                  <img
                    className="notfound-image"
                    src={srca}
                    alt="Little Lemon Restaurant"
                  />
              </div>

            </div>
         </section>
      </>
  );
};

export default NotFound;
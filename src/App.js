import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./components/Home";
import Reservation from "./components/Reservation";
import ConfirmedReservation from "./components/Reservation/ConfirmedReservation";
import UnderConstruction from "./components/UnderConstruction";
import NotFound from "./components/NotFound";

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/about" element={<UnderConstruction />}></Route>
          <Route path="/menu" element={<UnderConstruction />}></Route>
          <Route path="/reservations" element={<Reservation />}></Route>
          <Route path="/order" element={<UnderConstruction />}></Route>
          <Route path="/login" element={<UnderConstruction />}></Route>
          <Route path="/confirmed" element={<ConfirmedReservation />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Layout>
    </>
  );
};

export default App;
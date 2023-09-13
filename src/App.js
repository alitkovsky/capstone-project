import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Layout from './layout/Layout';
import Home from './components/Home';
import Booking from './components/Booking';
import ConfirmedBooking from './components/Booking/ConfirmedBooking';
import UnderConstruction from './components/UnderConstruction';
import NotFound from './components/NotFound';

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/about" element={<UnderConstruction />}></Route>
          <Route path="/menu" element={<UnderConstruction />}></Route>
          <Route path="/reservations" element={<Booking />}></Route>
          <Route path="/order" element={<UnderConstruction />}></Route>
          <Route path="/login" element={<UnderConstruction />}></Route>
          <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;

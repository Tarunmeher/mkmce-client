import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Portal/LayOut/LayOut';
import Dashboard from './Portal/Dashboard/Dashboard';
import Enquiry from './Portal/Admission/Enquiry';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/portal/enquiry" element={<Enquiry />} />
      </Route>
    </Routes>
  );
};

export default App;

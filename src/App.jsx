import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Portal/LayOut/LayOut';
import Dashboard from './Portal/Dashboard/Dashboard';
import Enquiry from './Portal/Admission/Enquiry';
import RegisterNewStudent from './Portal/Admission/RegisterNewStudent';
import AddTeacher from './Portal/Teacher/AddTeacher';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/admission/enquiry" element={<Enquiry />} />
        <Route path='/admission/register' element={<RegisterNewStudent />} />
        <Route path='/teacher/add' element={<AddTeacher />} />
      </Route>
    </Routes>
  );
};

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Portal/LayOut/LayOut';
import Dashboard from './Portal/Dashboard/Dashboard';
import Enquiry from './Portal/Admission/Enquiry';
import RegisterNewStudent from './Portal/Admission/RegisterNewStudent';
import AddEmployee from './Portal/Employee/AddEmployee';
import Admission from './Portal/Admission/Admission';
import ManageEmployee from './Portal/Employee/ManageEmployee';
import ManageStudent from './Portal/Student/ManageStudent';
import ClassManagement from './Portal/Academic/ClassManagement';
import SyllabusManagement from './Portal/Academic/SyllabusManagement';
import TimeTableManagement from './Portal/Academic/TimeTableManagement';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/admission/enquiry" element={<Enquiry />} />
        <Route path='/admission/register' element={<RegisterNewStudent />} />
        <Route path='/admission/admission-form' element={<Admission />} />
        <Route path='/employee/add' element={<AddEmployee />} />
        <Route path='/employee/manage' element={<ManageEmployee />} />
        <Route path="/student/manage" element={<ManageStudent />} />
        <Route path="/Academic/classmanagement" element={<ClassManagement />} />
        <Route path="/Academic/syllabusmanagement" element={<SyllabusManagement />} />
        <Route path="/Academic/timetablemanagement" element={<TimeTableManagement />} />
      </Route>
    </Routes>
  );
};

export default App;

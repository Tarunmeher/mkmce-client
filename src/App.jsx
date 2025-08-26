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
import SectionManagement from './Portal/Academic/SectionManagement';
import SyllabusManagement from './Portal/Academic/SyllabusManagement';
import TimeTableManagement from './Portal/Academic/TimeTableManagement';
import Login from './Portal/Login/Login';
import FeeStructure from './Portal/Finance/FeeStructure';
import AdmissionDue from './Portal/Finance/AdmissionDue';
import TransportDue from './Portal/Finance/TransportDue';
import SalleryPayment from './Portal/Finance/SalleryPayment';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/adminPortal" element={<Layout />}>
        <Route path="/adminPortal/dashboard" element={<Dashboard />} />
        <Route path="/adminPortal/admission/enquiry" element={<Enquiry />} />
        <Route path='/adminPortal/admission/register' element={<RegisterNewStudent />} />
        <Route path='/adminPortal/admission/admission-form' element={<Admission />} />
        <Route path='/adminPortal/employee/add' element={<AddEmployee />} />
        <Route path='/adminPortal/employee/manage' element={<ManageEmployee />} />
        <Route path="/adminPortal/student/manage" element={<ManageStudent />} />
        <Route path="/adminPortal/Academic/classmanagement" element={<ClassManagement />} />
        <Route path="/adminPortal/Academic/sectionmanagement" element={<SectionManagement />} />
        <Route path="/adminPortal/Academic/syllabusmanagement" element={<SyllabusManagement />} />
        <Route path="/adminPortal/Academic/timetablemanagement" element={<TimeTableManagement />} />
        <Route path='/adminPortal/Finance/feestructure' element={<FeeStructure />} />
        <Route path='/adminPortal/Finance/admisiondue' element={<AdmissionDue />} />
        <Route path='/adminPortal/Finance/transportdue' element={<TransportDue />} />
        <Route path='/adminPortal/Finance/sallerypayment' element={<SalleryPayment />} />
      </Route>
    </Routes>
  );
};

export default App;

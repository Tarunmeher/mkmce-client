import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Enquiry = () => {
  const [form, setForm] = useState({
    studentName: '',
    fatherName: '',
    admissionClass: '',
    dob: '',
    address: '',
    pincode: '',
    mobile: '',
    email: '',
    aadharCard: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { studentName, fatherName, admissionClass, dob, address, pincode, mobile, email, aadharCard } = form;

    if (!studentName || !fatherName || !admissionClass || !dob || !address || !pincode || !mobile || !email || !aadharCard) {
      toast.error('Please fill in all required fields!');
      return;
    }

    console.log('Form Data:', form);
    toast.success('Form submitted successfully!');
  };

  const handleReset = () => {
    setForm({
      studentName: '',
      fatherName: '',
      admissionClass: '',
      dob: '',
      address: '',
      pincode: '',
      mobile: '',
      email: '',
      aadharCard: ''
    });
    toast.info('Form cleared');
  };

  return (
    <div className="p-4  mx-auto">
      <ToastContainer />
      <p className="text-sm text-gray-500 mb-4 cursor-pointer"><Link to='/'>Home</Link> - <span className="text-blue-600">Enquiry Form</span></p>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded flex flex-col space-y-4">
        <h2 className="text-xl font-semibold border-b pb-2">Enquiry Form</h2>

        <div className="flex flex-col md:flex-row gap-4">
          <input name="studentName" value={form.studentName} onChange={handleChange} placeholder="Student Name" className="w-full border p-2 rounded" required />
          <input name="fatherName" value={form.fatherName} onChange={handleChange} placeholder="Father's Name" className="w-full border p-2 rounded" required />
        </div>

        <input name="admissionClass" value={form.admissionClass} onChange={handleChange} placeholder="Standard or Class" className="w-full border p-2 rounded" required />

        <div className="flex flex-col">
          <label htmlFor="dob" className="mb-1 text-sm font-medium text-gray-700">Date of Birth</label>
          <input type="date" name="dob" value={form.dob} onChange={handleChange} className="w-full border p-2 rounded" required />
        </div>

        <input name="address" value={form.address} onChange={handleChange} placeholder="Address" className="w-full border p-2 rounded" required />
        <input name="pincode" value={form.pincode} onChange={handleChange} placeholder="Pincode" className="w-full border p-2 rounded" required />
        <input name="mobile" value={form.mobile} onChange={handleChange} placeholder="Mobile Number" className="w-full border p-2 rounded" required />
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full border p-2 rounded" required />
        <input name="aadharCard" value={form.aadharCard} onChange={handleChange} placeholder="Aadhar Card Number" className="w-full border p-2 rounded" required />

        <div className="flex space-x-4 pt-4">
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
          <button type="button" onClick={handleReset} className="bg-gray-600 text-white px-4 py-2 rounded">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default Enquiry;

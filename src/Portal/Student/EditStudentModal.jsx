import React from 'react';
import { X } from 'lucide-react';

const inputClass = "border px-2 py-1 rounded w-full focus:outline-none";

const EditStudentModal = ({ isOpen, onClose, studentData, onChange, onSubmit }) => {
  if (!isOpen || !studentData) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          <X />
        </button>
        <h3 className="text-lg font-semibold mb-4">Edit Student</h3>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name*</label>
            <input
              name="name"
              value={studentData.name}
              onChange={onChange}
              className={inputClass}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Gender*</label>
            <select
              name="gender"
              value={studentData.gender}
              onChange={onChange}
              className={inputClass}
              required
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Parents Name*</label>
            <input
              name="parentsName"
              value={studentData.parentsName}
              onChange={onChange}
              className={inputClass}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Class*</label>
            <select
              name="class"
              value={studentData.class}
              onChange={onChange}
              className={inputClass}
              required
            >
              <option value="">Select Class</option>
              {[...Array(12)].map((_, i) => (
                <option key={i + 1}>{i + 1}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Section*</label>
            <select
              name="section"
              value={studentData.section}
              onChange={onChange}
              className={inputClass}
              required
            >
              <option value="">Select Section</option>
              {['A', 'B', 'C', 'D'].map((sec) => (
                <option key={sec}>{sec}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Date of Birth*</label>
            <input
              type="date"
              name="dob"
              value={studentData.dob}
              onChange={onChange}
              className={inputClass}
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">Address*</label>
            <input
              name="address"
              value={studentData.address}
              onChange={onChange}
              className={inputClass}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Mobile*</label>
            <input
              name="mobile"
              value={studentData.mobile}
              onChange={onChange}
              className={inputClass}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email*</label>
            <input
              type="email"
              name="email"
              value={studentData.email}
              onChange={onChange}
              className={inputClass}
              required
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditStudentModal;

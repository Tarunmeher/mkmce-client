import React from 'react';
import { X } from 'lucide-react';

const ViewStudentModal = ({ isOpen, onClose, student }) => {
  if (!isOpen || !student) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-xl relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
          onClick={onClose}
        >
          <X />
        </button>

        <h2 className="text-xl font-semibold mb-4">Student Details</h2>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div><strong>ID:</strong> {student.id}</div>
          <div><strong>Name:</strong> {student.name}</div>
          <div><strong>Gender:</strong> {student.gender}</div>
          <div><strong>Parents Name:</strong> {student.parentsName}</div>
          <div><strong>Class:</strong> {student.class}</div>
          <div><strong>Section:</strong> {student.section}</div>
          <div><strong>Address:</strong> {student.address}</div>
          <div><strong>DOB:</strong> {student.dob}</div>
          <div><strong>Mobile:</strong> {student.mobile}</div>
          <div><strong>Email:</strong> {student.email}</div>
          <div className="col-span-2">
            <strong>Photo:</strong><br />
            <img src={student.photo} alt={student.name} className="w-20 h-20 rounded-full mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewStudentModal;

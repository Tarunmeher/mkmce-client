import React from "react";
import { X } from "lucide-react";

const EditClassModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-md shadow-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Edit Class</h3>
          <X className="w-5 h-5 cursor-pointer" onClick={onClose} />
        </div>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Class Name</label> 
            <input type="text" defaultValue={data.className} className="w-full border border-gray-300 px-3 py-2 rounded-md" />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Section</label>
            <select defaultValue={data.section} className="w-full border border-gray-300 px-3 py-2 rounded-md">
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
            </select>
          </div>

          <button type="button" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditClassModal;

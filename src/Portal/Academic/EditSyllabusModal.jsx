import React from "react";
import { X } from "lucide-react";

const EditSyllabusModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-md shadow-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Edit Syllabus</h3>
          <X className="w-5 h-5 cursor-pointer" onClick={onClose} />
        </div>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Class Name</label>
            <select defaultValue={data.className} className="w-full border border-gray-300 px-3 py-2 rounded-md">
              <option>Nursery</option>
              <option>LKG</option>
              <option>UKG</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Subject</label>
            <select defaultValue={data.subject} className="w-full border border-gray-300 px-3 py-2 rounded-md">
              <option>English</option>
              <option>Hindi</option>
              <option>Math</option>
              <option>Science</option>
              <option>EVS</option>
              <option>Social Studies</option>
              <option>Computer</option>
              <option>General Knowledge</option>
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

export default EditSyllabusModal;

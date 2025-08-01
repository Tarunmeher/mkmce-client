import React, { useState } from "react";
import { Pencil } from "lucide-react";
import EditSyllabusModal from "./EditSyllabusModal"; // ⬅️ Import here

const SyllabusManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const syllabusData = [
    { id: 201, className: "Class 1", subject: "Math" },
    { id: 202, className: "Class 2", subject: "English" },
  ];

  const handleEdit = (item) => {
    setEditData(item);
    setIsModalOpen(true);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <p className="text-sm mb-2 text-gray-700">
        Home - <span className="text-blue-500">Syllabus Management</span>
      </p>

      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4">Manage Syllabus</h2>

        {/* Add form */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <select className="border border-gray-300 px-3 py-2 rounded-md w-full">
            <option>Select Class</option>
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

          <input type="text" placeholder="Enter Subject" className="border border-gray-300 px-3 py-2 rounded-md w-full" />
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 w-full">
            Submit
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200">
            <thead className="bg-gray-100">
              <tr className="text-left">
                <th className="border px-3 py-2">Sl. No</th>
                <th className="border px-3 py-2">ID</th>
                <th className="border px-3 py-2">Class Name</th>
                <th className="border px-3 py-2">Subject</th>
                <th className="border px-3 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {syllabusData.map((item, index) => (
                <tr key={item.id} className="text-gray-800">
                  <td className="border px-3 py-2">{index + 1}</td>
                  <td className="border px-3 py-2">{item.id}</td>
                  <td className="border px-3 py-2">{item.className}</td>
                  <td className="border px-3 py-2">{item.subject}</td>
                  <td className="border px-3 py-2">
                    <Pencil
                      className="w-4 h-4 text-green-600 cursor-pointer"
                      onClick={() => handleEdit(item)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Call */}
      <EditSyllabusModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={editData || {}}
      />
    </div>
  );
};

export default SyllabusManagement;

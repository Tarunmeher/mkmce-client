import React, { useState } from "react";
import { Pencil } from "lucide-react";
import EditClassModal from "./EditClassModal"; // ⬅️ Import here

const ClassManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const classData = [
    { id: 101, className: "Class 1", section: "A" },
    { id: 102, className: "Class 2", section: "B" },
  ];

  const handleEdit = (item) => {
    setEditData(item);
    setIsModalOpen(true);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <p className="text-sm mb-2 text-gray-700">
        Home - <span className="text-blue-500">Class Management</span>
      </p>

      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4">Create Class</h2>

        {/* Add Form */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <input type="text" placeholder="Select Class" className="border border-gray-300 px-3 py-2 rounded-md w-full" />
          <select className="border border-gray-300 px-3 py-2 rounded-md w-full">
            <option>Select Section</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
          </select>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 w-full">
            Submit
          </button>
        </div>

        {/* Table */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Manage Class</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200">
              <thead className="bg-gray-100">
                <tr className="text-left">
                  <th className="border px-3 py-2">Sl. No</th>
                  <th className="border px-3 py-2">ID</th>
                  <th className="border px-3 py-2">Class Name</th>
                  <th className="border px-3 py-2">Section</th>
                  <th className="border px-3 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {classData.map((item, index) => (
                  <tr key={item.id} className="text-gray-800">
                    <td className="border px-3 py-2">{index + 1}</td>
                    <td className="border px-3 py-2">{item.id}</td>
                    <td className="border px-3 py-2">{item.className}</td>
                    <td className="border px-3 py-2">{item.section}</td>
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

      </div>

      {/* Modal Call */}
      <EditClassModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={editData || {}}
      />
    </div>
  );
};

export default ClassManagement;

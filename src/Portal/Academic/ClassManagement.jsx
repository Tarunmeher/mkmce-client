import React, { useState, useEffect } from "react";
import { Pencil } from "lucide-react";
import EditClassModal from "./EditClassModal"; // ⬅️ Import here
import apiRequest from "../../../services/apiService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const ClassManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [classData, setClassData] = useState(null);
  const [classForm, setClassForm] = useState({
    name: "",
    section: "",
  });


  const updateValue = (e) => {
    const { name, value } = e.target;
    setClassForm((prev) => ({ ...prev, [name]: value }));
  };

  const clearForm = () => {
    setClassForm({
      name: "",
      section: "",
    });
  };

  const saveClass = async (e) => {
    e.preventDefault();
    try {
      const fields = Object.values(classForm);
      if (fields.some((f) => !f)) {
        toast.error("Please fill in all required fields!");
        return;
      }

      const response = await apiRequest(
        "POST",
        "/class/createClass",
        classForm
      );
      if (response && response.success) {
        toast.success("New Class Created successfully!");
        fetchClassList();
        clearForm();
      } else {
        toast.success("Unable to save Class detail");
      }
    } catch (error) {
      toast.error(error.message || "Something Went Wrong !");
      console.log(error);
    }
  };

  const fetchClassList = async()=>{
    try {
      const response = await apiRequest('GET', '/class/getClasslist');
      if(response && response.success){
        setClassData(response.data);
      }else{
        toast.error("No Class Available");
      }
    } catch (error) {
      toast.error(error.error || "Something Went Wrong !");
      console.log(error);
    }
  }

  useEffect(()=>{
      fetchClassList();
  },[]);


  const handleEdit = (item) => {
    setEditData(item);
    setIsModalOpen(true);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <ToastContainer autoClose={2000} />
      <p className="text-sm mb-2 text-gray-700">
       <Link to='/'>Home -</Link>  <span className="text-blue-500">Class Management</span>
      </p>

      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4">Create Class</h2>

        {/* Add Form */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <input
            onChange={updateValue}
            value={classForm.name}
            type="text"
            name="name"
            placeholder="Class Name"
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />
          <select
            onChange={updateValue}
            value={classForm.section}
            name="section"
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          >
            <option>Select Section</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
          </select>
          <button
            type="button"
            onClick={saveClass}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 w-full"
          >
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
                {classData && classData.map((item, index) => (
                  <tr key={item.id} className="text-gray-800">
                    <td className="border px-3 py-2">{index + 1}</td>
                    <td className="border px-3 py-2">{item.class_id}</td>
                    <td className="border px-3 py-2">{item.name}</td>
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

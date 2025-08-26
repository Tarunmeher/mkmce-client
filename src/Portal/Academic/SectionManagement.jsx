import React, { useState, useEffect } from "react";
import { Pencil } from "lucide-react";
// import EditSectionModal from "./EditSectionModal"; // ⬅️ Import here
import apiRequest from "../../../services/apiService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SectionManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [classData, setClassData] = useState(null);
  const [sectionData, setSectionData] = useState(null);
  const [sectionForm, setSectionForm] = useState({
    classid:"",
    sectionname: "",
  });

  const updateValue = (e) => {
    const { name, value } = e.target;
    setSectionForm((prev) => ({ ...prev, [name]: value }));
  };

  const clearForm = () => {
    setSectionForm({
        classid:"",
        sectionname: ""
    });
  };

  const saveSection = async (e) => {
    e.preventDefault();
    try {
      const fields = Object.values(sectionForm);
      if (fields.some((f) => !f)) {
        toast.error("Please fill in all required fields!");
        return;
      }

      const payload = {
        classid:sectionForm.classid,
        sectionname:sectionForm.sectionname,
        classname:classData.filter((c)=>c.class_id==sectionForm.classid)[0].name
      }
      const response = await apiRequest(
        "POST",
        "/class/createSection",
        JSON.stringify(payload)
      );
      if (response && response.success) {
        toast.success("New Section Created successfully!");
        fetchSectionList();
        clearForm();
      } else {
        toast.success("Unable to save Section detail");
      }
    } catch (error) {
      toast.error(error.error || "Something Went Wrong !");
      console.log(error);
    }
  };

  const fetchSectionList = async () => {
    try {
      const response = await apiRequest("GET", "/class/getSectionlist");
      if (response && response.success) {
        setSectionData(response.data);
      } else {
        toast.error("No Section Available");
      }
    } catch (error) {
      toast.error(error.error || "Something Went Wrong !");
      console.log(error);
    }
  };

  const fetchClassList = async () => {
    try {
      const response = await apiRequest("GET", "/class/getClasslist");
      if (response && response.success) {
        setClassData(response.data);
      } else {
        setClassData(null);
      }
    } catch (error) {
      setClassData(null);
      // toast.error(error.error || "Something Went Wrong !");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchClassList();
    fetchSectionList();
  }, []);

  const handleEdit = (item) => {
    setEditData(item);
    setIsModalOpen(true);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <ToastContainer autoClose={2000} />
      <p className="text-sm mb-2 text-gray-700">
        Home - <span className="text-blue-500">Class Section Management</span>
      </p>

      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4">Add New Section</h2>

        {/* Add Form */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <select
            onChange={updateValue}
            name="classid"
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          >
            <option value="">--Select Class--</option>
            {classData &&
              classData.map((item, index) => (
                <option value={item.class_id}>{item.name}</option>
              ))}
          </select>

          <input
            onChange={updateValue}
            value={sectionForm.sectionname}
            type="text"
            name="sectionname"
            placeholder="Section Name"
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />
          <button
            type="button"
            onClick={saveSection}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 w-full"
          >
            Submit
          </button>
        </div>

        {/* Table */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Manage Section</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200">
              <thead className="bg-gray-100">
                <tr className="text-left">
                  <th className="border px-3 py-2">Sl. No</th>
                  <th className="border px-3 py-2">ID</th>
                  <th className="border px-3 py-2">Class Name</th>
                  <th className="border px-3 py-2">Section Name</th>
                  <th className="border px-3 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {sectionData &&
                  sectionData.map((item, index) => (
                    <tr key={item.id} className="text-gray-800">
                      <td className="border px-3 py-2">{index + 1}</td>
                      <td className="border px-3 py-2">{item.class_id}</td>
                      <td className="border px-3 py-2">{item.class_name}</td>
                      <td className="border px-3 py-2">{item.section_name}</td>
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
      {/* <EditSectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={editData || {}}
      /> */}
    </div>
  );
};

export default SectionManagement;

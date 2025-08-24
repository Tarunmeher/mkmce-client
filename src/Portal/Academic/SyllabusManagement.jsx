import React, { useState, useEffect } from "react";
import { Pencil } from "lucide-react";
import EditSyllabusModal from "./EditSyllabusModal"; // ⬅️ Import here
import apiRequest from "../../../services/apiService";
import { ToastContainer, toast } from "react-toastify";

const SyllabusManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [classData, setClassData] = useState(null);
  const [syllabusData, setSyllabusData] = useState(null);
  const [syllabusForm, setSyllabusForm] = useState({
    classid: "",
    subjectname: "",
  });

  const clearForm = () => {
    setSyllabusForm({
      classid: "",
      subjectname: "",
    });
  };

  const saveSubject = async (e) => {
    e.preventDefault();
    try {
      const fields = Object.values(syllabusForm);
      if (fields.some((f) => !f)) {
        toast.error("Please fill in all required fields!");
        return;
      }

      const response = await apiRequest(
        "POST",
        "/class/addNewSubjectToClass",
        syllabusForm
      );
      if (response && response.success) {
        toast.success("New Subject Added to Class!");
        fetchSyllabusDetail();
        clearForm();
      } else {
        toast.success("Unable to add subject");
      }
    } catch (error) {
      toast.error(error.error || "Something Went Wrong !");
      console.log(error);
    }
  };

  const handleEdit = (item) => {
    setEditData(item);
    setIsModalOpen(true);
  };

  const updateValue = (e) => {
    const { name, value } = e.target;
    setSyllabusForm((prev) => ({ ...prev, [name]: value }));
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

  const fetchSyllabusDetail = async () => {
    try {
      const response = await apiRequest("GET", "/class/getSyllabusDetail");
      if (response && response.success) {
        setSyllabusData(response.data);
      } else {
        setSyllabusData(null);
      }
    } catch (error) {
      setSyllabusData(null);
      // toast.error(error.error || "Something Went Wrong !");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchClassList();
    fetchSyllabusDetail();
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <ToastContainer autoClose={2000} />
      <p className="text-sm mb-2 text-gray-700">
        Home - <span className="text-blue-500">Syllabus Management</span>
      </p>

      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4">Manage Syllabus</h2>

        {/* Add form */}
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
            name="subjectname"
            type="text"
            placeholder="Enter Subject"
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />
          <button
            onClick={saveSubject}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 w-full"
          >
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
              {syllabusData &&
                syllabusData.map((item, index) => (
                  <tr key={item.id} className="text-gray-800">
                    <td className="border px-3 py-2">{index + 1}</td>
                    <td className="border px-3 py-2">{item.id}</td>
                    <td className="border px-3 py-2">{classData.filter((c)=> c.class_id==item.class_id)[0].name}</td>
                    <td className="border px-3 py-2">{item.subject_name}</td>
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

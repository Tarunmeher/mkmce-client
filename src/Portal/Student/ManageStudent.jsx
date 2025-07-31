import React, { useState, useEffect } from 'react';
import { Edit, Eye, Pen, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import EditStudentModal from './EditStudentModal';
import ViewStudentModal from './ViewStudentModal';
import apiRequest from "../../../services/apiService";

const ManageStudent = () => {
  const inputClass = "border px-2 py-1 rounded w-full focus:outline-none";

  const [searchId, setSearchId] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchClass, setSearchClass] = useState('');
  const [students, setStudents] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const [viewData, setViewData] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);


  //Function to open the modal with data
  const openEditModal = (student) => {
    setIsModalOpen(true);
    setEditData(student);
  }
  //Function to handle input change inside modal:
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  }

  //Function to update the student in the list:
  const handleUpdate = () => {
    for (const key in editData) {
      if (!editData[key]) {
        alert(`Please fill in the ${key} field`);
        return;
      }
    }

    setStudents((prev) =>
      prev.map((s) => (s.id === editData.id ? editData : s))
    );
    setIsModalOpen(false);
  };


  // handle delete student
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this student?");
    if (confirmDelete) {
      setStudents((prev) => prev.filter((s) => s.id !== id));
    }
  };


  // View student details
  const openViewModal = (student) => {
    setViewData(student);
    setIsViewModalOpen(true);
  };


// filtered students based on search criteria
  const filteredStudents = students.filter((s) => {
    return (
      s.roll_no.includes(searchId) &&
      s.first_name.toLowerCase().includes(searchName.toLowerCase()) &&
      s.standard.includes(searchClass)
    );
  });

  const fetchEnquiries = async () =>{
    try {
      const response = await apiRequest('GET', '/student/getStudents');
      if(response && response.success){
        setStudents(response.data);
      }else{
        toast.error("No Student Found");
      }
    } catch (error) {
      console.log(error);
      // toast.error("Something Went Wrong");
    }
  }


  useEffect(()=>{
      fetchEnquiries();
  },[])

  return (
    <div className="p-4 mx-auto">
      <p className="text-sm text-gray-500 mb-4 cursor-pointer">
        <Link to="/">Home </Link>-{" "}
        <span className="text-blue-600">Student List</span>
      </p>

      <div className="p-4 bg-white rounded shadow-md">
        <h2 className="text-lg font-semibold mb-4">Manage Student List</h2>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Search By Id..."
            className={inputClass}
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Search by Name..."
            className={inputClass}
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Search by Class..."
            className={inputClass}
            value={searchClass}
            onChange={(e) => setSearchClass(e.target.value)}
          />
        </div>

        <div className="overflow-auto">
          <table className="min-w-full text-sm text-left border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Student ID</th>
                <th className="p-2 border">Photo</th>
                <th className="p-2 border">Student Name</th>
                <th className="p-2 border">Father's Name</th>
                <th className="p-2 border">Roll No</th>
                <th className="p-2 border">Class</th>
                <th className="p-2 border">Section</th>
                <th className="p-2 border">Gender</th>
                <th className="p-2 border">Caste</th>
                <th className="p-2 border">DOB</th>
                <th className="p-2 border">Mobile</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Address</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((e) => (
                <tr key={e.id} className="hover:bg-gray-50">
                  <td className="p-2 border">{e.id}</td>
                  <td className="p-2 border">
                    <img
                      src={e.photo}
                      alt={e.name}
                      className="w-8 h-8 rounded-full cursor-pointer"
                    />
                  </td>
                  <td className="p-2 border">{e.first_name+' '+e.last_name}</td>
                  <td className="p-2 border">{e.fathers_name}</td>
                  <td className="p-2 border">{e.roll_no}</td>
                  <td className="p-2 border">{e.standard}</td>
                  <td className="p-2 border">{e.section}</td>
                  <td className="p-2 border">{e.gender}</td>
                  <td className="p-2 border">{e.caste}</td>
                  <td className="p-2 border">{new Date(e.dob.split("T")[0]).toDateString()}</td>
                  <td className="p-2 border">{e.contact_number}</td>
                  <td className="p-2 border">{e.email}</td>
                  <td className="p-2 border">{e.current_address}</td>
                  <td className="p-2 border flex gap-2 items-center">
                    <Eye onClick={() => openViewModal(e)} className="w-4 h-4 text-gray-700 cursor-pointer" />
                    <Pen onClick={() => openEditModal(e)} className="w-4 h-4 text-green-600 cursor-pointer" />
                    <Trash2 onClick={() => handleDelete(e.id)} className="w-4 h-4 text-red-600 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <EditStudentModal isOpen={isModalOpen}
        onClose={(e) => setIsModalOpen(false)}
        studentData={editData}
        onChange={handleInputChange}
        onSubmit={handleUpdate} />

      <ViewStudentModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        student={viewData}
      />
    </div>
  );
};

export default ManageStudent;

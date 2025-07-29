import React, { useState } from 'react';
import { Edit, Eye, Pen, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import EditStudentModal from './EditStudentModal';
import ViewStudentModal from './ViewStudentModal';

const ManageStudent = () => {
  const inputClass = "border px-2 py-1 rounded w-full focus:outline-none";

  const [searchId, setSearchId] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchClass, setSearchClass] = useState('');
  const [students, setStudents] = useState([
    {
      id: '2901',
      name: 'Richi Rozario',
      gender: 'Female',
      parentsName: 'xyg',
      class: '1',
      section: 'A',
      address: 'TA-110, North Sydney',
      dob: '2010-03-10',
      mobile: '+8812 00 5098',
      email: 'ndisons@gmail.com',
      photo: 'https://i.pravatar.cc/40?img=12',
    },
  ]);

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
      s.id.includes(searchId) &&
      s.name.toLowerCase().includes(searchName.toLowerCase()) &&
      s.class.includes(searchClass)
    );
  });

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
                <th className="p-2 border">ID</th>
                <th className="p-2 border">Photo</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Gender</th>
                <th className="p-2 border">Parents Name</th>
                <th className="p-2 border">Class</th>
                <th className="p-2 border">Section</th>
                <th className="p-2 border">Address</th>
                <th className="p-2 border">Date Of Birth</th>
                <th className="p-2 border">Mobile No</th>
                <th className="p-2 border">E-mail</th>
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
                  <td className="p-2 border">{e.name}</td>
                  <td className="p-2 border">{e.gender}</td>
                  <td className="p-2 border">{e.parentsName}</td>
                  <td className="p-2 border">{e.class}</td>
                  <td className="p-2 border">{e.section}</td>
                  <td className="p-2 border">{e.address}</td>
                  <td className="p-2 border">{e.dob}</td>
                  <td className="p-2 border">{e.mobile}</td>
                  <td className="p-2 border">{e.email}</td>
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

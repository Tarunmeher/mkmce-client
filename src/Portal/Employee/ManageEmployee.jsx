import React from 'react';
import { Eye, Pen, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const ManageEmployee = () => {
    const inputClass = "border px-2 py-1 rounded w-full focus:outline-none";

    const [searchId, setSearchId] = React.useState('');
    const [searchName, setSearchName] = React.useState('');
    const [searchClass, setSearchClass] = React.useState('');

    const Employee = [
        {
            id: '2901',
            name: 'Richi Rozario',
            gender: 'Female',
            subject: 'Math',
            class: '1',
            section: 'A',
            address: 'TA-110, North Sydney',
            dob: '10/03/2010',
            mobile: '+8812 00 5098',
            email: 'ndisons@gmail.com',
            photo: 'https://i.pravatar.cc/40?img=12',
        },
    ];

    // filtered based on search criteria
    const filteredEmployees = Employee.filter((emp) => {
        return (
            emp.id.includes(searchId) &&
            emp.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase()) &&
            emp.class.includes(searchClass)
        );
    })

    return (
        <div className="p-4 mx-auto">
            <ToastContainer autoClose={2000} />
            <p className="text-sm text-gray-500 mb-4 cursor-pointer">
                <Link to="/">Home </Link>-{" "}
                <span className="text-blue-600">Employee List</span>
            </p>
            <div className="p-4 bg-white rounded shadow-md">
                <h2 className="text-lg font-semibold mb-4">Manage Employee List</h2>

                {/* Search Bar */}
                <div className="flex gap-2 mb-4">
                    <input
                        type="text"
                        placeholder="Search By Id..."
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)}
                        className={inputClass}
                    />
                    <input
                        type="text"
                        placeholder="Search by Name..."
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                        className={inputClass}
                    />
                    <input
                        type="text"
                        placeholder="Searcch by Class..."
                        value={searchClass}
                        onChange={(e) => setSearchClass(e.target.value)}
                        className={inputClass}
                    />
                </div>

                {/* Table */}
                <div className="overflow-auto">
                    <table className="min-w-full text-sm text-left border">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-2 border">ID</th>
                                <th className="p-2 border">Photo</th>
                                <th className="p-2 border">Name</th>
                                <th className="p-2 border">Gender</th>
                                <th className="p-2 border">Subject</th>
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
                            {filteredEmployees.length === 0 ? (
                                <tr>
                                    <td colSpan="12" className="text-center text-gray-500 p-4">
                                        No matching employee found.
                                    </td>
                                </tr>
                            ) : (
                                filteredEmployees.map((e) => (
                                    <tr key={e.id} className="hover:bg-gray-50">
                                        <td className="p-2 border">{e.id}</td>
                                        <td className="p-2 border">
                                            <img
                                                src={e.photo}
                                                alt={e.name}
                                                className="w-8 h-8 rounded-full cursor-pointer "
                                            />
                                        </td>
                                        <td className="p-2 border">{e.name}</td>
                                        <td className="p-2 border">{e.gender}</td>
                                        <td className="p-2 border">{e.subject}</td>
                                        <td className="p-2 border">{e.class}</td>
                                        <td className="p-2 border">{e.section}</td>
                                        <td className="p-2 border">{e.address}</td>
                                        <td className="p-2 border">{e.dob}</td>
                                        <td className="p-2 border">{e.mobile}</td>
                                        <td className="p-2 border">{e.email}</td>
                                        <td className="p-2 border flex gap-2 items-center">
                                            <Eye className="w-4 h-4 text-gray-700 cursor-pointer" />
                                            <Pen className="w-4 h-4 text-green-600 cursor-pointer" />
                                            <Trash2 className="w-4 h-4 text-red-600 cursor-pointer" />
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageEmployee;

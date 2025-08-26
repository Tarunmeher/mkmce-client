import React, { useState } from "react";
import { Pencil, Trash2, Printer } from "lucide-react";
import { Link } from "react-router-dom";

const TimeTableManagement = () => {
  const [day, setDay] = useState("");
  const [subject, setSubject] = useState("");
  const [teacher, setTeacher] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [timeTable, setTimeTable] = useState([
    {
      id: 1,
      day: "Monday",
      subject: "Mathematics",
      teacher: "Mr. Sharma",
      timeSlot: "8:00 AM - 8:40 AM",
    },
  ]);
  const [filterDay, setFilterDay] = useState("All");
  const [editId, setEditId] = useState(null);

  // Handle Submit (Add or Update)
  const handleSubmit = () => {
    if (!day || !subject || !teacher || !timeSlot) {
      return alert("⚠️ Please fill all fields");
    }

    if (editId) {
      // Update existing record
      setTimeTable((prev) =>
        prev.map((item) =>
          item.id === editId ? { id: editId, day, subject, teacher, timeSlot } : item
        )
      );
      setEditId(null);
    } else {
      // Add new record
      const newItem = {
        id: Date.now(),
        day,
        subject,
        teacher,
        timeSlot,
      };
      setTimeTable([...timeTable, newItem]);
    }

    // Reset fields
    setDay("");
    setSubject("");
    setTeacher("");
    setTimeSlot("");
  };

  // Handle Edit
  const handleEdit = (item) => {
    setDay(item.day);
    setSubject(item.subject);
    setTeacher(item.teacher);
    setTimeSlot(item.timeSlot);
    setEditId(item.id);
  };

  // Handle Delete
  const handleDelete = (id) => {
    setTimeTable(timeTable.filter((item) => item.id !== id));
  };

  // Filter Data
  const filteredData =
    filterDay === "All" ? timeTable : timeTable.filter((item) => item.day === filterDay);

  // Print function
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Breadcrumb */}
      <p className="text-sm mb-2 text-gray-700">
        <Link to='/'>Home -</Link> <span className="text-blue-500">Time Table Management</span>
      </p>

      {/* Card */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Manage Time Table</h2>
        </div>

        {/* Add Time Table Form */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter Day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Enter Subject Name"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Enter Teacher Name"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />
          <select
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          >
            <option value="">Select Time Slot</option>
            <option>8:00 AM - 8:40 AM</option>
            <option>8:40 AM - 9:20 AM</option>
            <option>9:20 AM - 10:00 AM</option>
            <option>10:00 AM - 10:40 AM</option>
            <option>10:40 AM - 11:20 AM</option>
          </select>
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            {editId ? "Update" : "Submit"}
          </button>
        </div>

        {/* Filter */}
        <div className="flex items-center gap-2 mb-4 justify-between">
          <div>

            <label className="text-sm font-medium">Filter by Day:</label>
            <select
              className="border px-2 py-1 rounded"
              value={filterDay}
              onChange={(e) => setFilterDay(e.target.value)}
            >
              <option value="All">All</option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
            </select>
          </div>
          {/* Print Button */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            <Printer className="w-4 h-4" />
            Print
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200">
            <thead className="bg-gray-100">
              <tr className="text-left">
                <th className="border px-3 py-2">Sl. No</th>
                <th className="border px-3 py-2">Day</th>
                <th className="border px-3 py-2">Subject</th>
                <th className="border px-3 py-2">Teacher</th>
                <th className="border px-3 py-2">Time</th>
                <th className="border px-3 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={item.id} className="text-gray-800">
                  <td className="border px-3 py-2">{index + 1}</td>
                  <td className="border px-3 py-2">{item.day}</td>
                  <td className="border px-3 py-2">{item.subject}</td>
                  <td className="border px-3 py-2">{item.teacher}</td>
                  <td className="border px-3 py-2">{item.timeSlot}</td>
                  <td className="border px-3 py-2 flex items-center gap-2">
                    <Pencil
                      className="w-4 h-4 text-green-600 cursor-pointer"
                      onClick={() => handleEdit(item)}
                    />
                    <Trash2
                      className="w-4 h-4 text-red-600 cursor-pointer"
                      onClick={() => handleDelete(item.id)}
                    />
                  </td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-3 text-gray-500">
                    No records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TimeTableManagement;

import React from "react";

const TimeTableManagement = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Breadcrumb */}
      <p className="text-sm mb-2 text-gray-700">
        Home - <span className="text-blue-500">Time Table Management</span>
      </p>

      {/* Card */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4">Manage Time Table</h2>

        {/* Add Time Table Form */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter Day"
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Enter Subject Name"
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Enter Teacher Name"
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />
          <select className="border border-gray-300 px-3 py-2 rounded-md w-full">
            <option>Select Time Slot</option>
            <option>8:00 AM - 8:40 AM</option>
            <option>8:40 AM - 9:20 AM</option>
            <option>9:20 AM - 10:00 PM</option>
            <option>10:00 PM - 10:40 PM</option>
            <option>10:40 PM - 11:00 PM</option>
          </select>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeTableManagement;

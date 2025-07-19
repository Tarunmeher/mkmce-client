import React from 'react';
import { FaUsers, FaChalkboardTeacher, FaUserPlus, FaMoneyBillWave } from 'react-icons/fa';

const Dashboard = () => {
  const stats = [
    { label: 'Students', value: '1000', icon: <FaUsers className="text-green-600 text-3xl" /> },
    { label: 'Teachers', value: '30', icon: <FaChalkboardTeacher className="text-blue-600 text-3xl" /> },
    { label: 'Parents', value: '900', icon: <FaUserPlus className="text-yellow-500 text-3xl" /> },
    { label: 'Total Earnings', value: '$30,000', icon: <FaMoneyBillWave className="text-cyan-500 text-3xl" /> },
  ];

  return (
    <div className="p-4">
      <p className="text-sm text-gray-500 mb-4 cursor-pointer">Home - <span className="text-blue-600">Dashboard</span></p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded shadow p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {stat.icon}
              <div>
                <p className="text-l text-gray-600">{stat.label}</p>
              </div>
            </div>
            <div className="border-l h-8 mx-2"></div>
            <p className="text-lg font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

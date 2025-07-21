import { useState } from 'react';
import { Link } from 'react-router-dom';
import { portalinfo } from '../../portalInfo.js'

import {
  Users, FileQuestion,
  Home, ChevronRight, ChevronDown, Menu, UserPlus, Briefcase, PlusCircle, Settings
} from 'lucide-react';

const menuItems = [
  {
    label: 'Admission',
    icon: <UserPlus className="w-5 h-5 text-yellow-400" />,
    subItems: [
      { to: '/portal/enquiry', icon: <FileQuestion className="w-4 h-4 text-yellow-400" />, label: 'Enquiry' },
      { to: '/portal/register', icon: <PlusCircle className="w-4 h-4 text-yellow-400" />, label: 'Register New Student' },

    ],
  },
  {
    label: 'Employee',
    icon: <Briefcase className="w-5 h-5 text-yellow-400" />,
    subItems: [
      { to: '/employee/add', icon: <PlusCircle className="w-4 h-4 text-yellow-400" />, label: 'Add Employee' },
      { to: '/employee/manage', icon: <Settings className="w-4 h-4 text-yellow-400" />, label: 'Manage Employee' },
    ],
  },
  {
    label: 'Students',
    icon: <Users className="w-5 h-5 text-yellow-400" />,
    subItems: [
      { to: '/student/add', icon: <PlusCircle className="w-4 h-4 text-yellow-400" />, label: 'Add Student' },
      { to: '/student/manage', icon: <Settings className="w-4 h-4 text-yellow-400" />, label: 'Manage Student' },
    ],
  },
  // ... (keep your other items as is)
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleSidebar = () => setIsOpen(!isOpen);

  const toggleDropdown = (label) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <div className={`bg-blue-900 text-white h-screen transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
      {/* Header */}
      <div className="flex items-center justify-between bg-yellow-400 text-black px-4 py-3">
        {isOpen && (
          <div className="flex items-center gap-2">
            <img src="https://img.icons8.com/ios-filled/50/graduation-cap.png" alt="logo" className="w-8 h-8" />
            <span className="font-bold text-xl">{portalinfo.title} Portal</span>
          </div>
        )}
        <button onClick={toggleSidebar} className="text-black ml-auto">
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Dashboard */}
      <Link to='/'>
        <div className="flex items-center justify-between p-3 hover:bg-blue-800 cursor-pointer">
          <div className="flex items-center gap-3">
            <Home className="w-5 h-5 text-yellow-400" />
            {isOpen && <span className="font-medium text-l">Dashboard</span>}
          </div>
        </div>
      </Link>

      {/* Dropdown Items */}
      <div className="mt-3">
        {menuItems.map((item) => (
          <div key={item.label}>
            <div
              className="flex items-center justify-between p-2 hover:bg-blue-800 cursor-pointer"
              onClick={() => toggleDropdown(item.label)}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                {isOpen && <span className="text-l font-medium">{item.label}</span>}
              </div>
              {isOpen && (
                openDropdowns[item.label] ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )
              )}
            </div>

            {/* Sub Items */}
            {openDropdowns[item.label] && isOpen && (
              <div className="ml-10 text-sm text-gray-300 space-y-1 py-1">
                {item.subItems.map((sub, idx) => (
                  sub.to ? (
                    <Link
                      key={idx}
                      to={sub.to}
                      className="flex items-center gap-2 cursor-pointer hover:text-yellow-400"
                    >
                      {sub.icon}
                      <span>{sub.label}</span>
                    </Link>
                  ) : (
                    <div
                      key={idx}
                      className="flex items-center gap-2 cursor-pointer hover:text-yellow-400"
                    >
                      {sub.icon}
                      <span>{sub.label}</span>
                    </div>
                  )
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

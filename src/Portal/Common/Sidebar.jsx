import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // ✅ useLocation added
import { portalinfo } from '../../portalInfo.js';

import {
  Users, FileQuestion,
  Home, ChevronRight, ChevronDown, Menu, UserPlus, Briefcase, PlusCircle, Settings,  Wallet,
  FileWarning, 
  Bus,          
  CreditCard  
} from 'lucide-react';

const menuItems = [
  {
    label: 'Admission',
    icon: <UserPlus className="w-5 h-5 text-yellow-400" />,
    subItems: [
      { to: '/admission/enquiry', icon: <FileQuestion className="w-4 h-4 text-yellow-400" />, label: 'Enquiry' },
      { to: '/admission/register', icon: <PlusCircle className="w-4 h-4 text-yellow-400" />, label: 'Register New Student' },
      { to: '/admission/admission-form', icon: <PlusCircle className="w-4 h-4 text-yellow-400" />, label: 'Admission' },
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
      { to: '/student/manage', icon: <Settings className="w-4 h-4 text-yellow-400" />, label: 'Manage Student' },
    ],
  },
  {
    label: 'Academic',
    icon: <Users className="w-5 h-5 text-yellow-400" />,
    subItems: [
      { to: '/Academic/classmanagement', icon: <Settings className="w-4 h-4 text-yellow-400" />, label: 'Class Management' },
      { to: '/Academic/syllabusmanagement', icon: <Settings className="w-4 h-4 text-yellow-400" />, label: 'Syllabus Management' },
      { to: '/Academic/timetablemanagement', icon: <Settings className="w-4 h-4 text-yellow-400" />, label: 'Time Table Management' },
    ],
  },
  {
    label: 'Finance',
    icon: <Users className="w-5 h-5 text-yellow-400" />,
    subItems: [
      { to: '/Finance/feestructure', icon: <Wallet className="w-4 h-4 text-yellow-400" />, label: 'Fee Structure' },
      { to: '/Finance/admisiondue', icon: <FileWarning className="w-4 h-4 text-yellow-400" />, label: 'Admission Due' },
      { to: '/Finance/transportdue', icon: <Bus className="w-4 h-4 text-yellow-400" />, label: 'Transport Due' },
      { to: '/Finance/sallerypayment', icon: <CreditCard className="w-4 h-4 text-yellow-400" />, label: 'Sallery Payment' },
    ],
  }

];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const location = useLocation(); // ✅ Get current path

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
        <div className={`flex items-center justify-between p-3 cursor-pointer ${location.pathname === '/' ? 'bg-yellow-400 text-black' : 'hover:bg-blue-800'}`}>
          <div className="flex items-center gap-3">
            <Home className={`w-5 h-5 ${location.pathname === '/' ? 'text-black' : 'text-yellow-400'}`} />
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
                {item.subItems.map((sub, idx) => {
                  const isActive = location.pathname === sub.to;
                  return (
                    <Link
                      key={idx}
                      to={sub.to}
                      className={`flex items-center gap-2 cursor-pointer hover:text-yellow-400 ${isActive ? 'text-yellow-400 font-semibold' : ''}`}
                    >
                      <div className={`w-4 h-4 ${isActive ? 'text-yellow-400' : 'text-yellow-400'}`}>
                        {sub.icon}
                      </div>
                      <span>{sub.label}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

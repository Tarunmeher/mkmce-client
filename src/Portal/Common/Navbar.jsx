import { Bell, Mail, Globe } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-2 bg-white shadow">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKg87vKCHZ5XdNBZqE1z4QEKeNX1ki2TNOMA&s" alt="Logo" className="w-6 h-6" />
        <h1 className="text-sm sm:text-base font-semibold">
          Welcome To <span className="text-black">MKMCE</span>
          <span className="text-gray-400 ml-1">School Management System</span>
        </h1>
      </div>

      {/* Center Search */}
      <div className="flex-1 mx-4 max-w-md hidden md:flex">
        <input
          type="text"
          placeholder="Search Here ..."
          className="w-full rounded-full bg-gray-100 px-4 py-1.5 text-sm outline-none focus:ring-2 focus:ring-gray-300"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center text-sm gap-1">
          <Globe className="w-4 h-4" />
          <span>English</span>
        </div>

        <Mail className="w-5 h-5 text-sky-500" />
        <div className="relative">
          <Bell className="w-5 h-5 text-orange-500" />
          <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">3</span>
        </div>

        <div className="flex items-center gap-2">
          <img
            src="https://cdn.pixabay.com/photo/2024/08/30/14/02/ai-generated-9009341_1280.jpg"
            alt="User"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="text-sm">
            <div className="font-medium">Dusmant Meher</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

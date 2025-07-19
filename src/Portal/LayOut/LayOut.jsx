import { Outlet } from 'react-router-dom';
import Sidebar from '../Common/Sidebar';
import Navbar from '../Common/Navbar';



const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-4 overflow-y-auto flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;

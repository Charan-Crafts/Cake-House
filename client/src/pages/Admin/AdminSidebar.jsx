import React from 'react';
import { NavLink } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import { Outlet } from 'react-router-dom';

const AdminSidebar = () => {
    const sideBar = [
        { name: "Homepage", path: "/admin" },
        { name: "Add Course", path: "addcourse" },
        { name: "Upload Videos", path: "uploadvideos" },
    ];

    return (
        <div className="drawer lg:drawer-open">
            <input id="admin-drawer" type="checkbox" className="drawer-toggle" />

            {/* Main Content */}
            <div className="drawer-content flex flex-col ml-3">
                <AdminNavbar />
                <div className="p-6 bg-gray-50 min-h-screen">
                    <Outlet />
                </div>
            </div>

            {/* Sidebar */}
            <div className="drawer-side">
                <label htmlFor="admin-drawer" className="drawer-overlay"></label>
                <div className="w-64 bg-yellow-50 h-full flex flex-col p-4">
                    <h2 className="text-xl font-bold text-orange-500 mb-6">Admin Panel</h2>

                    <ul className="menu w-full flex flex-col gap-2">
                        {sideBar.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    end={item.path === "/admin"} // <-- only exact match for home
                                    to={item.path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "px-4 py-2 rounded-lg bg-orange-500 text-white transition-colors duration-200"
                                            : "px-4 py-2 rounded-lg bg-yellow-50 text-black hover:bg-orange-100 hover:text-orange-700 transition-colors duration-200"
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminSidebar;

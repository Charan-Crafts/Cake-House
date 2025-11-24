import React from 'react';

const AdminNavbar = () => {
    return (
        <div className="navbar bg-white shadow-md px-4 md:px-8">
            {/* Left: Logo / Brand */}
            <div className="flex-1">
                <a className=" normal-case text-2xl font-heading text-orange-500">
                    Cake House
                </a>
            </div>

            {/* Right: Search + Profile */}
            <div className="flex items-center gap-3">
                {/* Search */}
                <input
                    type="text"
                    placeholder="Search..."
                    className="
        input 
        input-bordered 
        w-24 md:w-64 
        px-4 py-2 
        rounded-lg 
        border-gray-300 
        bg-white 
        text-gray-700 
        placeholder-gray-400 
        focus:outline-none 
        focus:border-orange-500 
        focus:ring-1 
        focus:ring-orange-500 
        transition 
        duration-200
    "
                />


                {/* Profile Dropdown */}
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar hover:bg-orange-50 transition duration-200"
                    >
                        <div className="w-10 rounded-full">
                            <img
                                alt="Admin Avatar"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            />
                        </div>
                    </div>

                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-white rounded-lg shadow-lg z-50 mt-3 w-52 p-2"
                    >

                        <li>
                            <a className="hover:bg-red-100 text-red-600 rounded-md">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminNavbar;

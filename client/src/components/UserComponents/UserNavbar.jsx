import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogout } from "../../redux/slices/authSlice";
import { toast } from "react-toastify";
const UserNavbar = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const hanldeCartClick = () => {
    navigate('/cake-house/cart');

  }

  const handleLogout = () => {
    const logout = async () => {
      const response = await dispatch(userLogout());
      console.log("Logout response:", response);
      if (response.payload.success) {
        
        toast.success("Logout successful!");
        return;
      } else {
        toast.error(response.payload.message);
      }
    }
    logout();
  }
  return (
    <div className="navbar bg-white shadow-sm px-6 py-2 flex items-center justify-between">

      {/* Brand */}
      <div className="flex-1">
        <Link className="text-2xl font-bold text-orange-500  hover:text-orange-400 transition-all" to="/cake-house">
          Cake House
        </Link>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center flex-1 max-w-md">
        <label className="input bg-white border border-gray-300 rounded-lg flex items-center gap-2 px-3 py-2 text-orange-500 font-semibold w-full">
          <svg
            className="h-5 opacity-60"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            placeholder="Search"
            className="grow outline-none"
          />
        </label>
      </div>

      {/* Right Icons */}
      <div className="flex-none flex items-center gap-4 ml-4">

        {/* Cart */}
        <div className="dropdown dropdown-end" onClick={hanldeCartClick}>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle bg-black hover:bg-gray-800 text-white"
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item bg-orange-500 border-none text-white">
                8
              </span>
            </div>
          </div>

          <div
            tabIndex={0}
            className="dropdown-content card card-compact bg-base-100 z-10 mt-3 w-56 shadow-lg"
          >

          </div>
        </div>

        {/* Avatar */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="User avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box mt-3 w-52 p-2 shadow-lg z-10"
          >
            {/* <li>
              <a className="justify-between">
                Profile
                <span className="badge badge-primary text-white">New</span>
              </a>
            </li> */}

            <li>
              <button onClick={handleLogout} className="bg-orange-500 rounded-2xl text-white">Logout</button>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default UserNavbar;

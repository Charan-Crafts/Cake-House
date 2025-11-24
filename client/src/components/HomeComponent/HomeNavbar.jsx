import React from 'react';
import { NavLink } from 'react-router-dom';
const HomeNavbar = () => {

    const navItems = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Courses",
            path: "/courses"
        },
        {
            name: "Blogs",
            path: "/blogs"
        },
        {
            name: "Login",
            path: "/login"
        },
        {
            name: "Get started",
            path: "/register"
        }
    ]
    const activeStyle = "border-b-2 border-orange-400";
    return (
        <div className=' h-[10vh] flex items-center justify-between gap-3 shadow-mg shadow-md bg-yellow-50'>
            <div className=' w-1/4 p-3'>
                <h1 className='text-orange-500 text-3xl font-bold ml-5 text-shadow-md/10'>Baking Website</h1>
            </div>
            <div className='text-green-50  w-3/4 flex flex-row justify-evenly items-center p-3'>
                {
                    navItems.map((item, index) => {
                        return (
                            <NavLink to={item.path} key={index} className="text-black text-lg font-medium">
                                {({ isActive }) => (
                                    <span className={isActive ? activeStyle : ""}>{item.name}</span>
                                )}
                            </NavLink>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default HomeNavbar;

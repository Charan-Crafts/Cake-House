import React from 'react';
import UserNavbar from '../../components/UserComponents/UserNavbar';
import UserCourseList from '../../components/UserComponents/UserCourseList';
import { Outlet } from 'react-router-dom';
const UserLayout = () => {
  return (
    <div className='bg-yellow-50 min-h-screen'>
      <UserNavbar />
      
      <Outlet/>
    </div>
  );
}

export default UserLayout;

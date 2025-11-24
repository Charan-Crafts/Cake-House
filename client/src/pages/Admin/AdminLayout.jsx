import React from 'react';
import AdminSidebar from './AdminSidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className='bg-yellow-50 min-h-screen'>
      <AdminSidebar/>
      
    </div>
  );
}

export default AdminLayout;

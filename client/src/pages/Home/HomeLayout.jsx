import React from 'react';
import { Outlet } from 'react-router-dom';
import HomeNavbar from '../../components/HomeComponent/HomeNavbar';
import Hero from '../../components/Hero';
import HomePage from './HomePage';
import Footer from '../../components/Footer';
const HomeLayout = () => {
  return (
    <div className=' min-h-screen flex flex-col '>
      <HomeNavbar/>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default HomeLayout;

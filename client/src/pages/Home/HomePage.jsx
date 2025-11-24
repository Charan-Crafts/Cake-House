import React from 'react';
import { Outlet } from 'react-router-dom';
import Hero from '../../components/Hero';
import CourseList from '../../components/HomeComponent/CourseList';
import Footer from '../../components/Footer';

const HomePage = () => {
  return (
    <div className=''>
      <Hero/>
      <CourseList/>
      
      
    </div>
  );
}

export default HomePage;

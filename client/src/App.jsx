import React from 'react';
import AdminLayout from "./pages/Admin/AdminLayout";
import HomeLayout from "./pages/Home/HomeLayout";
import UserLayout from "./pages/Users/UserLayout";
import { Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Authpages/Login';
import Register from './pages/Authpages/Register';
import ProtectedRoutes from './ProtectedRoutes';
import Courses from './pages/Home/Courses';
import Blogs from './pages/Home/Blogs';
import HomePage from './pages/Home/HomePage';
import UserCart from './pages/Users/UserCart';
import UserCourseList from './components/UserComponents/UserCourseList';
import CourseDetails from './pages/Users/CourseDetails';
import AddCourse from './pages/Admin/AddCourse';
import UploadVideos from './pages/Admin/UploadVideos';
import AdminViewCourse from './pages/Admin/AdminViewCourse';
const App = () => {

  const isAuthenticated = true; // for testing purpose
  const user = {
    role: "admin"
  }


  // text-button
  // bg-background
  return (
    <>
      <div className='p-3 bg-background min-h-screen'>
        <Routes>

          <Route path="/" element={

            <ProtectedRoutes isAuthenticated={isAuthenticated} user={user} >
              <HomeLayout />
            </ProtectedRoutes>
          } >
            <Route path="" element={<HomePage />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path='blogs' element={<Blogs />} />
            <Route path='courses' element={<Courses />} />
          </Route>

          <Route path="/cake-house" element={
            <ProtectedRoutes isAuthenticated={isAuthenticated} user={user} >
              <UserLayout />
            </ProtectedRoutes>
          } >
            <Route path="" element={<UserCourseList />} />
            <Route path="cart" element={<UserCart />} />
            <Route path="course/:id" element ={<CourseDetails/>}/>

          </Route>

          <Route path="/admin" element={

            <ProtectedRoutes isAuthenticated={isAuthenticated} user={user} >
              <AdminLayout />
            </ProtectedRoutes>
          } >

            {/* <Route path=""/> */}
            <Route path="" element={<AdminViewCourse/>}/>
            <Route path="addcourse" element={<AddCourse/>}/>
            <Route path="uploadvideos" element={<UploadVideos/>}/>

          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

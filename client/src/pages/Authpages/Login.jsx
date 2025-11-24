import React from 'react';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../redux/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { toast } from 'react-toastify';
const Login = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })

  const handleLogin = (e) => {
    e.preventDefault();
    const login = async () => {

      const response = await dispatch(userLogin(loginData));

      if (response.payload.success) {
        toast.success("Login successful!");
        response.payload.user.role === "admin" ? navigate("/admin") : navigate("/cake-house");
        setLoginData({
          email: "",
          password: ""
        });
        return; 
      }else{
        toast.error(response.payload.message);

      }
    };
    login();
  }

  return (
    <div className=' flex items-center justify-center flex-col p-3 bg-yellow-50 mt-4'>
      <div className='w-full p-4 mb-6 rounded-md  text-center'>
        <h1 className='font-heading text-2xl  text-shadow-md text-orange-600 '>Welcome Back </h1>
      </div>
      <form className="fieldset bg-yellow-50 border-orange-600 rounded-box w-xs border p-4 shadow-md" onSubmit={handleLogin}>
        <fieldset className="fieldset">
          <label className="label text-orange-500 font-heading ">Email</label>
          <input type="email" className="input validator bg-white text-black" placeholder="Email" required value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
          <p className="validator-hint hidden">Required</p>
        </fieldset>

        <label className="fieldset">
          <span className="label text-orange-500">Password</span>
          <input type="password" className="input validator bg-white text-black" placeholder="Password" required value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
          <span className="validator-hint hidden">Required</span>
        </label>

        <button className="btn btn-neutral mt-4" type="submit">Login</button>
        <button className="btn btn-ghost mt-1 bg-orange-500" onClick={() => navigate("/register")}>Create New Account</button>
      </form>
    </div>
  );
}

export default Login;

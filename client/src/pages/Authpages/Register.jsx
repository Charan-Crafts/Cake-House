import React from 'react';

const Register = () => {
  return (
    <div className='flex items-center justify-center flex-col p-3 bg-yellow-50 mt-4'>
      {/* Heading */}
      <div className='w-full p-4 mb-6 rounded-md text-center'>
        <h1 className='font-heading text-2xl text-shadow-md text-orange-600'>Create New Account</h1>
      </div>

      {/* Form */}
      <form className="bg-yellow-50 border border-orange-600 rounded-box w-2/8 p-4 shadow-md space-y-3">

        {/* Username */}
        <div className="flex flex-col space-y-1">
          <label className="label text-orange-500 font-semibold">Username</label>
          <input
            type="text"
            className="input bg-white text-black"
            placeholder="Username"
            required
            pattern="[A-Za-z][A-Za-z0-9\-]*"
            minLength="3"
            maxLength="30"
            title="Only letters, numbers or dash"
          />
          {/* <p className="text-sm text-gray-500">
            Must be 3 to 30 characters containing only letters, numbers or dash
          </p> */}
        </div>

        {/* Email */}
        <div className="flex flex-col space-y-1">
          <label className="label text-orange-500 font-heading">Email</label>
          <input
            type="email"
            className="input bg-white text-black"
            placeholder="Email"
            required
          />
        </div>

        {/* Password */}
        <div className="flex flex-col space-y-1">
          <label className="label text-orange-500">Password</label>
          <input
            type="password"
            className="input bg-white text-black"
            placeholder="Password"
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col space-y-1">
          <label className="label text-orange-500">Confirm Password</label>
          <input
            type="password"
            className="input bg-white text-black"
            placeholder="Confirm Password"
            required
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col space-y-1">
          <label className="label text-orange-500">Phone</label>
          <input
            type="tel"
            className="input bg-white text-black"
            placeholder="Phone"
            required
            pattern="[0-9]{10}"
            maxLength="10"
            title="Must be 10 digits"
          />
          <p className="text-sm text-gray-500">Must be 10 digits</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-2 mt-2">
          <button className="btn btn-neutral w-full" type="submit">Register</button>
          <button className="btn btn-ghost w-full bg-orange-500 text-white" >Already Have an Account?</button>
        </div>

      </form>
    </div>
  );
}

export default Register;

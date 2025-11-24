import React from 'react';

const AddCourse = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-start py-10">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-2xl p-8">
        <h1 className="text-3xl font-semibold text-orange-500 mb-6 text-center">
          Add New Course
        </h1>

            <form className="flex flex-col gap-4">

          {/* Course Image */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">Course Image</label>
            <input type="file" className="file-input file-input-bordered w-full bg-white text-heading" />
          </div>

          {/* Course Title */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">Course Title</label>
            <input type="text" placeholder="Course Title" className="input input-bordered w-full bg-white text-heading" />
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">Description</label>
            <textarea placeholder="About course" className="textarea textarea-bordered w-full h-24 resize-none bg-white text-heading"></textarea>
          </div>

          {/* Price */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">Price</label>
            <input type="number" placeholder="Price" className="input input-bordered w-full bg-white text-heading" />
          </div>

          {/* Coupon Code */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">Coupon Code</label>
            <input type="text" placeholder="Coupon Code" className="input input-bordered w-full bg-white text-heading" />
          </div>

          {/* Discounted Price */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">Discounted Price</label>
            <input type="number" placeholder="Discounted Price" className="input input-bordered w-full bg-white text-heading" />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn bg-orange-500 hover:bg-orange-600 text-white font-semibold mt-4">
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCourse;

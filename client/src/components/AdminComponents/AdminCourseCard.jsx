import React from 'react';
import { useNavigate } from 'react-router-dom';
const CourseCard = ({ course }) => {
    const navigate = useNavigate();

    const handleEidt = (id) =>{
        console.log("Edit course with id:", id);
        navigate(`/admin/editcourse/${id}`,{state:course});
    }
    return (
        <div className="w-80c h-[500px] hover-3d mt-8" onClick={() => { }}>
            <div className="card bg-white shadow-md rounded-xl w-full h-full flex flex-col">

                {/* Image */}
                <figure className="px-6 pt-6 flex-shrink-0 h-60">
                    <img
                        src={course?.thumbNail || "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"}
                        alt={course?.name || "Course Image"}
                        className="w-full h-full object-cover rounded-xl"
                    />
                </figure>

                {/* Body */}
                <div className="card-body px-6 py-4 flex flex-col flex-grow">

                    {/* Title */}
                    <h2 className="text-2xl font-heading font-semibold text-gray-800 text-left w-full">
                        {course?.name || "Course Title"}
                    </h2>

                    {/* Description */}
                    <p className="text-orange-500 text-body text-sm text-left mt-2 leading-relaxed h-20 overflow-hidden">
                        {course?.description?.slice(0, 100) || "Course description goes here..."}
                    </p>

                    {/* Buttons */}
                    <div className="flex items-center justify-between w-full mt-auto">
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 active:bg-yellow-50 active:text-orange-500 transition-all duration-200" onClick={()=>handleEidt(course._id)}>
                            View
                        </button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 active:bg-yellow-50 active:text-red-500 transition-all duration-200">
                            Delete
                        </button>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default CourseCard;

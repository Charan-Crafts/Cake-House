import React from 'react';
import { useNavigate } from 'react-router-dom';
const  CourseCard = ({ course }) => {

    const navigate = useNavigate();

    const handleRedirect =(courseId)=>{
        navigate(`/cake-house/course/${courseId}`,{state:course});
        
    }

    return (
        <div className="hover-3d w-96 h-[500px] mb-10 cursor-pointer" onClick={()=>handleRedirect(course._id)}> {/* FIXED HEIGHT */}

            <div className="card bg-white shadow-md rounded-xl w-full h-full flex flex-col">

                {/* IMAGE */}
                <figure className="w-full">
                    <img
                        src={course.thumbNail}
                        alt={course.name}
                        className="w-full h-auto max-h-56 object-contain rounded-t-xl"
                    />
                </figure>

                {/* BODY */}
                <div className="card-body px-8 py-4 flex flex-col flex-grow">

                    {/* Title */}
                    <h2 className="text-2xl font-heading font-semibold text-gray-800 text-left w-full">
                        {course.name}
                    </h2>

                    {/* Description — FIXED HEIGHT so all cards match */}
                    <p className="text-orange-500 text-body text-md font-serif text-lg text-left mt-2 leading-relaxed h-21 overflow-hidden">
                        {course.description.slice(0, 75)}...
                    </p>

                    {/* Price stays at the bottom thanks to flex */}
                    <p className="text-xl font-heading font-semibold text-gray-800 text-left w-full mt-auto">
                        {course.price}
                    </p>

                    {/* Buttons */}
                    <div className="flex items-center justify-between w-full mt-4">
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 active:bg-yellow-50 active:text-orange-500 transition-all duration-200">
                            Buy Now
                        </button>
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 active:bg-yellow-50 active:text-orange-500 transition-all duration-200">
                            Add Cart
                        </button>
                    </div>
                </div>

            </div>

            {/* Required 3D children */}
            <div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div>

        </div>
    );
};

export default CourseCard;

import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const CourseDetails = () => {
    const { id } = useParams();
    const location = useLocation();

    const course = location.state;

    if (!course) {
        return (
            <div className="mt-10 text-center text-gray-500">
                <p>Course not found.</p>
            </div>
        );
    }

    return (
        <div className="mt-10 px-6 md:px-12">
            <div className="card lg:card-side bg-white shadow-md rounded-xl overflow-hidden flex flex-col lg:flex-row h-96">

                {/* Image */}
                <figure className="w-full lg:w-1/2 h-64 lg:h-full flex-shrink-0">
                    <img
                        src={course.thumbNail}
                        alt={course.name}
                        className="w-full h-full object-contain rounded-t-xl lg:rounded-l-xl lg:rounded-r-none"
                    />
                </figure>

                {/* Content */}
                <div className="card-body flex flex-col justify-between px-6 py-4 lg:w-1/2 overflow-y-auto">

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-heading font-semibold text-gray-800">
                        {course.name}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-700 text-sm md:text-base mt-2 md:mt-4 leading-relaxed overflow-y-auto h-32">
                        {course.description}
                    </p>

                    {/* Price & Buy Button */}
                    <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-4">
                        <span className="bg-orange-500 text-white px-5 py-2 rounded-xl font-semibold text-lg text-center w-full md:w-auto">
                            {course.price}
                        </span>
                        <button className="bg-orange-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-orange-600 transition duration-200 w-full md:w-auto">
                            Buy Now
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CourseDetails;

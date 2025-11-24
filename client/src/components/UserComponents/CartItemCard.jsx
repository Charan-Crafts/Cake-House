import React from 'react';
import { useNavigate } from 'react-router-dom';
const CartItemCard = ({ course }) => {

    const navigate = useNavigate();

    const redirectToCourseDetails = (id) => {
        
        navigate(`/cake-house/course/${id}`,{state:course});
        
    }
    
    return (
        <div className="card bg-white shadow-md rounded-xl overflow-hidden mb-4 flex flex-col md:flex-row h-40 md:h-40 cursor-pointer" key={course._id} onClick={()=>redirectToCourseDetails(course._id)}>
            {/* Image */}
            <figure className="w-full md:w-40 h-40 flex-shrink-0">
                <img
                    src={course.thumbNail}
                    alt={course.name}
                    className="w-full h-full object-contain rounded-t-xl md:rounded-l-xl md:rounded-r-none"
                />
            </figure>

            {/* Content */}
            <div className="card-body flex flex-col justify-between flex-grow px-4 py-3">

                {/* Title & Description */}
                <div>
                    <h2 className="text-lg md:text-xl font-heading font-semibold text-gray-800">
                        {course.name}
                    </h2>
                    <p className="text-gray-600 mt-1 text-sm md:text-base line-clamp-2">
                        {course.description}...
                    </p>
                </div>

                {/* Price & Remove Button */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-2">
                    <span className="bg-orange-500 rounded-xl px-4 py-2 w-full md:w-auto text-white font-semibold text-center">
                        {course.price}
                    </span>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-all duration-200 w-full md:w-auto cursor-pointer">
                        Remove
                    </button>
                </div>

            </div>

        </div>
    );
}

export default CartItemCard;

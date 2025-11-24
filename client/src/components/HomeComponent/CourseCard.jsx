import React from 'react';
import { useLocation } from 'react-router-dom';
const CourseCard = ({ course }) => {

    const location = useLocation();

    const handleRedirect = (courseId) => {
        console.log(courseId);
        
    }


    return (
        <>
            <div className="card  w-96 shadow-sm bg-yellow-50 p-3 hover:shadow-lg transition-shadow duration-300 mx-3 my-3 r" >
                <figure className="mb-3 w-full h-48 bg-yellow-100 flex items-center justify-center overflow-hidden">
                    <img
                        src={course.thumbNail}
                        alt={course.name}
                        className="max-w-full max-h-full object-contain"
                    />
                </figure>



                <div className="card-body gap-2">
                    <h2 className="card-title text-center text-orange-500 text-shadow-md text-xl font-serif font-medium">{course.name}</h2>
                    <p className='p-2 font-body text-black text-lg'>{course.description}</p>
                    {
                        location.pathname === "/courses" && (<p className='text-lg font-semibold text-left px-3 text-orange-600'>{course.price}</p>)
                    }
                    <div className="card-actions flex flex-col items-center p-2">
                        <button className="bg-orange-500 px-5 py-2 rounded-xl shadow-lg font-medium cursor-pointer text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CourseCard;

import React from 'react';
import CourseCard from './CourseCard';
const CourseList = () => {

 const coursesList = [
  {
    name: "Master Cookie Baking Course",
    description: "Learn to bake perfect cookies—from soft & chewy to crispy delights. This course covers dough preparation, flavor combinations, baking techniques, and presentation tips.",
    thumbNail: "https://i.pinimg.com/1200x/9e/eb/da/9eebdaa7654853796279edad57f89ee5.jpg",
    price: "₹ 999"
  },
  {
    name: "Professional Cake Baking & Decoration",
    description: "A complete guide to baking moist cakes, mastering frosting, layering techniques, and decorating like a pro. Ideal for beginners and home bakers wanting to go premium.",
    thumbNail: "https://i.pinimg.com/1200x/67/6d/81/676d81f120ad73875982e78d4492dcbf.jpg",
    price: "₹ 799"
  },
  {
    name: "Pastries & Dessert Baking Essentials",
    description: "Learn the fundamentals of pastry making, cream fillings, dough techniques, and how to create bakery-style desserts with professional finishing.",
    thumbNail: "https://i.pinimg.com/736x/18/39/b5/1839b51798c581c9219f3d7ccd62cbda.jpg",
    price: "₹ 599"
  }
];

  return (
    <div className='bg-yellow-50 flex flex-col items-center py-10'>
      <div className='bg-yellow-100 w-11/12 p-4 mb-6 rounded-md shadow-md text-center'>
        <h1 className='text-3xl italic font-serif text-shadow-lg text-orange-500'>Trending Courses</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-center justify-center px-6'>

        {
          coursesList.map((course, index) => {
            return(
              <>
                <CourseCard key={index} course={course} />
              </>
            )
          })
        }



      </div>
    </div>
  );
}

export default CourseList;

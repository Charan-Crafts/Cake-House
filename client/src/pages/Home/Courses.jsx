import React from 'react';
import CourseCard from '../../components/HomeComponent/CourseCard';
const Courses = () => {
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
  },
  {
    name: "Artisan Bread Baking Mastery",
    description: "Discover the science of bread making—kneading, proofing, shaping, and baking artisan-style loaves with perfect crusts and soft interiors. Ideal for home bakers wanting bakery-quality bread.",
    price: "₹ 899",
    thumbNail:"https://i.pinimg.com/736x/82/e5/8a/82e58a37e19dd2fee2ccff175c1939cf.jpg"
  },
  {
    name: "Cupcake & Muffin Making Workshop",
    description: "Learn to bake fluffy muffins and beautifully frosted cupcakes with classic, chocolate, berry, and premium gourmet variations. Includes decoration and plating techniques.",
    price: "₹ 699",
    thumbNail:"https://i.pinimg.com/1200x/83/2a/49/832a49d5a1e2e0a6e02602d32cc9b84b.jpg"
  },
  {
    name: "Chocolate Desserts & Treats Course",
    description: "Master the art of chocolate baking—brownies, choco-chip cookies, fudge cakes, truffles, and molten desserts. Perfect for those who love rich and indulgent sweets.",
    price: "₹ 849",
    thumbNail:"https://i.pinimg.com/736x/06/90/84/06908409d2af8575b9db337c669c3006.jpg"
  },
  {
    name: "Advanced Pastry & Tart Creation",
    description: "A deep dive into flaky pastries, fruit tarts, custard fillings, puff pastry techniques, and elegant dessert styling with bakery-grade precision.",
    price: "₹ 1099",
    thumbNail:"https://i.pinimg.com/1200x/72/f6/9a/72f69aa8202a8f0e3992e85fdb6e7331.jpg"
  }
];

  return (
    <div className='bg-yellow-50 min-h-screen mt-3'>
      <div className=' p-3 flex items-center justify-center mb-3 flex-col gap-3'>
        <h1 className='italic text-2xl font-heading text-shadow-sm text-orange-500'>Find Your Course</h1>
        <input type="text" placeholder='Search course' className='p-2 rounded-md  text-orange-500 px-3 w-3/8 bg-white shadow-md border-b-1 ' />
      </div>
      <div className='grid grid-cols-3 p-3'>
        {
          coursesList.map((course, index) => {
            return(
            
                <CourseCard key={index} course={course} />
              
            )
          })
        }
      </div>
    </div>
  );
}

export default Courses;

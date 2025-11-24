import React from 'react';
import CartItemCard from '../../components/UserComponents/CartItemCard';
import { v4 as uuidv4 } from 'uuid';
const UserCart = () => {
    const coursesList = [
        {
            _id: uuidv4(),
            name: "Master Cookie Baking Course",
            description: "Learn to bake perfect cookies—from soft & chewy to crispy delights. This course covers dough preparation, flavor combinations, baking techniques, and presentation tips.",
            thumbNail: "https://i.pinimg.com/1200x/9e/eb/da/9eebdaa7654853796279edad57f89ee5.jpg",
            price: "₹ 999"
        },
        {
            _id: uuidv4(),
            name: "Professional Cake Baking & Decoration",
            description: "A complete guide to baking moist cakes, mastering frosting, layering techniques, and decorating like a pro. Ideal for beginners and home bakers wanting to go premium.",
            thumbNail: "https://i.pinimg.com/1200x/67/6d/81/676d81f120ad73875982e78d4492dcbf.jpg",
            price: "₹ 799"
        },
        {
            _id: uuidv4(),
            name: "Pastries & Dessert Baking Essentials",
            description: "Learn the fundamentals of pastry making, cream fillings, dough techniques, and how to create bakery-style desserts with professional finishing.",
            thumbNail: "https://i.pinimg.com/736x/18/39/b5/1839b51798c581c9219f3d7ccd62cbda.jpg",
            price: "₹ 599"
        },
        {
            _id: uuidv4(),
            name: "Artisan Bread Baking Mastery",
            description: "Discover the science of bread making—kneading, proofing, shaping, and baking artisan-style loaves with perfect crusts and soft interiors. Ideal for home bakers wanting bakery-quality bread.",
            thumbNail: "https://i.pinimg.com/736x/82/e5/8a/82e58a37e19dd2fee2ccff175c1939cf.jpg",
            price: "₹ 899"
        },
        {
            _id: uuidv4(),
            name: "Cupcake & Muffin Making Workshop",
            description: "Learn to bake fluffy muffins and beautifully frosted cupcakes with classic, chocolate, berry, and premium gourmet variations. Includes decoration and plating techniques.",
            thumbNail: "https://i.pinimg.com/1200x/83/2a/49/832a49d5a1e2e0a6e02602d32cc9b84b.jpg",
            price: "₹ 699"
        },
        {
            _id: uuidv4(),
            name: "Chocolate Desserts & Treats Course",
            description: "Master the art of chocolate baking—brownies, choco-chip cookies, fudge cakes, truffles, and molten desserts. Perfect for those who love rich and indulgent sweets.",
            thumbNail: "https://i.pinimg.com/736x/06/90/84/06908409d2af8575b9db337c669c3006.jpg",
            price: "₹ 849"
        },
        {
            _id: uuidv4(),
            name: "Advanced Pastry & Tart Creation",
            description: "A deep dive into flaky pastries, fruit tarts, custard fillings, puff pastry techniques, and elegant dessert styling with bakery-grade precision.",
            thumbNail: "https://i.pinimg.com/1200x/72/f6/9a/72f69aa8202a8f0e3992e85fdb6e7331.jpg",
            price: "₹ 1099"
        }
    ];
    return (
        <div className="mt-5 px-6 md:px-12">

            {/* Page Heading */}
            <div className="mb-8">
                <h1 className="text-5xl font-serif font-semibold text-black text-shadow-md">
                    Shopping Cart
                </h1>

                <p className="text-gray-600 mt-2 text-lg">
                    Review your selected courses and proceed to checkout.
                </p>
                <p className='text-gray-600 text-lg mt-2'>
                    You have {coursesList.length} items in your cart.
                </p>
            </div>

            {/* Cart Content */}
            <div className="flex flex-col lg:flex-row gap-6">

                {/* Cart Items */}
                <div className="lg:w-2/3 flex flex-col gap-4">
                    {
                        coursesList.map((course, index) => {
                            return (
                                <CartItemCard key={index} course={course} />
                            )
                        })
                    }
                    {/* Add more CartItemCard components as needed */}
                </div>

                {/* Cart Summary */}
                <div className="lg:w-1/3 h-full">
                    <div className="bg-orange-500 p-6 rounded-2xl flex flex-col gap-4 shadow-lg">

                        <h1 className="text-white text-3xl font-semibold font-serif">
                            Cart Summary
                        </h1>

                        <div className="flex justify-between items-center">
                            <span className="text-white text-2xl font-semibold font-serif">
                                Total:
                            </span>
                            <span className="text-white text-2xl font-semibold font-serif">
                                $299
                            </span>
                        </div>

                        <button className="bg-yellow-50 text-black px-4 py-3 rounded-lg font-semibold hover:bg-yellow-200 active:bg-orange-100 active:text-black transition-all duration-200 mt-5 w-full cursor-pointer">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserCart;

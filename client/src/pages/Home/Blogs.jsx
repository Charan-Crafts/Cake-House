import React from 'react';
import BlogCard from "../../components/HomeComponent/BlogCard";
const Blogs = () => {

  const bakingBlogPosts = [
  {
    id: 1,
    title: "10 Irresistible Cookie Recipes to Try This Weekend",
    description: "From crunchy chocolate chip to soft butter cookies, here are 10 cookie recipes that will make your weekend sweeter. Learn tips on dough consistency, baking times, and flavor variations.",
    blogThumbNail: "https://i.pinimg.com/1200x/9e/eb/da/9eebdaa7654853796279edad57f89ee5.jpg", 
    content: [
      "Introduction to different cookie textures (chewy vs crispy).",
      "Recipe for classic chocolate chip cookies.",
      "Tips on chilling dough for better shape.",
      "Ideas for flavor variations: oatmeal‑raisin, double chocolate, nutty cookies.",
      "How to store cookies so they stay fresh."
    ],
    tags: ["cookies", "baking", "desserts"]
  },
  {
    id: 2,
    title: "Art of Cake Decorating: Beginner to Pro",
    description: "Learn how to decorate beautiful cakes with simple tools. Covers frosting techniques, layering, piping, and creating eye-catching designs even if you're new to baking.",
    blogThumbNail: "https://i.pinimg.com/1200x/67/6d/81/676d81f120ad73875982e78d4492dcbf.jpg",
    content: [
      "Choosing the right cake base (sponge, butter, chiffon).",
      "How to make and color buttercream.",
      "Layering cakes like a bakery pro.",
      "Basic piping tips: stars, shells, rosettes.",
      "Using edible decorations: sprinkles, flowers, fruit."
    ],
    tags: ["cakes", "decoration", "baking"]
  },
  {
    id: 3,
    title: "Healthy Baking: Guilt-Free Desserts",
    description: "Explore baking desserts that are lower in sugar or use natural sweeteners. Includes recipes for muffin‑style treats, whole‑wheat cookies, and healthier cake options.",
    blogThumbNail:"https://i.pinimg.com/736x/18/39/b5/1839b51798c581c9219f3d7ccd62cbda.jpg",
    content: [
      "Why use whole wheat or almond flour.",
      "Substituting sugar with honey, maple syrup, or fruit purée.",
      "Recipes: banana muffins, whole wheat cookies, low sugar cake.",
      "Tips for reducing fat: using applesauce or Greek yogurt.",
      "How to balance health and taste in baked desserts."
    ],
    tags: ["healthy", "desserts", "baking"]
  },
  {
    id: 4,
    title: "Artisan Bread at Home: Step by Step Guide",
    description: "Make bakery-style artisan bread in your own kitchen. This guide walks you through kneading, proofing, shaping, and baking with a crisp crust and soft interior.",
    blogThumbNail: "https://i.pinimg.com/1200x/83/2a/49/832a49d5a1e2e0a6e02602d32cc9b84b.jpg", 
    content: [
      "Understanding basic bread ingredients: flour, water, yeast, salt.",
      "How to knead and why it matters.",
      "Proofing techniques: first rise, shaping, second rise.",
      "Baking tips: using steam, high heat, and proper loaf tension.",
      "Storing and slicing bread like a pro."
    ],
    tags: ["bread", "artisan", "baking"]
  },
  {
    id: 5,
    title: "Delicious Pastries: Croissants, Tarts & Danish",
    description: "From buttery croissants to fruit-filled tarts, discover how to create delicious pastries at home. Learn the lamination process, fillings, and finishing techniques.",
    blogThumbNail: "https://i.pinimg.com/1200x/72/f6/9a/72f69aa8202a8f0e3992e85fdb6e7331.jpg ",
    content: [
      "What is lamination and why it's important for pastries.",
      "How to make a basic croissant dough.",
      "Filling options: chocolate, fruit, custard.",
      "Making tart shells and prebaking them.",
      "Finishing touches: egg wash, sugar sprinkle, glaze."
    ],
    tags: ["pastries", "croissants", "tarts"]
  }
];

  return (
    <div className='min-h-screen bg-yellow-50 mt-3 flex flex-col gap-2'>
      <div className=' p-3 flex items-center justify-center mb-3 flex-col gap-3 '>
        <h1 className='italic text-2xl font-heading text-shadow-sm text-orange-500'>Cake House Blogs</h1>
        <input type="text" placeholder='Search Blogs' className='p-2 rounded-md px-3 text-orange-500 w-3/8 bg-white shadow-md border-b-1 ' />
      </div>
      {/* // Blog cards section */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-center justify-center px-6 hover:cursor-pointer mb-6 shadow-lg bg-white'>
        {
          bakingBlogPosts.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))
        }
      </div>
    </div>
  );
}

export default Blogs;

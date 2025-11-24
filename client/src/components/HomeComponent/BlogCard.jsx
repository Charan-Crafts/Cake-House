import React from 'react';

const BlogCard = ({ blog }) => {
    console.log(blog);

    return (
        <>
            <div className="card card-side bg-yellow-50 shadow-sm m-4 border border-gray-200 hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden h-70">

                {/* Image */}
                <figure className="w-1/2 h-full">
                    <img
                        className="object-cover w-full h-full"
                        src={blog.blogThumbNail}
                        alt={blog.title}
                    />
                </figure>

                {/* Card Content */}
                <div className="card-body flex flex-col justify-between p-4 w-1/2">

                    <div className="space-y-1">
                        <h2 className="card-title text-orange-500 text-lg">
                            {blog.title}
                        </h2>

                        <p className="text-black font-medium">
                            {blog.description.slice(0, 100)}...
                        </p>
                    </div>

                    {/* Button + Modal */}
                    <div className="text-center">

                        {/* Button to open modal */}
                        <label htmlFor="my_modal_7" className="btn btn-warning text-white font-semibold">
                            open modal
                        </label>

                        {/* Modal */}
                        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                        <div className="modal" role="dialog">
                            <div className="modal-box bg-yellow-50 h-[50vh] w-[50vw] rounded-lg shadow-lg">
                                <h3 className="text-sm font-bold text-orange-500">{blog.title}</h3>
                                <p className="py-4 text-sm text-black">
                                    {blog.description}
                                </p>

                                <ul className="list-none p-4 overflow-y-auto h-48">
                                    {blog.content.map((point, index) => (
                                        <li key={index} className="flex items-start gap-2 mb-2">
                                            <span className="text-orange-500 mt-1">★</span>
                                            <p className="text-black text-left">{point}</p>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                            <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

export default BlogCard;

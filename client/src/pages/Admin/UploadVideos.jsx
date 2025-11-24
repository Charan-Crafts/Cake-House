import React from 'react';

const UploadVideos = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex justify-center items-start py-10">
            <div className="bg-white shadow-lg rounded-xl w-full max-w-2xl p-8">
                <h1 className="text-3xl font-semibold text-orange-500 mb-6 text-center">
                    Upload Video
                </h1>

                <form className="flex flex-col gap-4">

                    {/* Select Course */}
                    <div className="flex flex-col">
                        <label className="font-semibold text-gray-700 mb-1">Select Course</label>
                        <select className="select select-bordered w-full">
                            <option disabled>Select the Course</option>
                            <option>Course 1</option>
                            <option>Course 2</option>
                            <option>Course 3</option>
                        </select>
                    </div>

                    {/* Video Upload */}
                    <div className="flex flex-col">
                        <label className="font-semibold text-gray-700 mb-1">Upload Video</label>
                        <input type="file" className="file-input file-input-bordered w-full" />
                    </div>

                    {/* Thumbnail Upload */}
                    <div className="flex flex-col">
                        <label className="font-semibold text-gray-700 mb-1">Upload Thumbnail</label>
                        <input type="file" className="file-input file-input-bordered w-full" />
                    </div>

                    {/* Video Title */}
                    <div className="flex flex-col">
                        <label className="font-semibold text-gray-700 mb-1">Video Title</label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </div>

                    {/* Video Description */}
                    <div className="flex flex-col">
                        <label className="font-semibold text-gray-700 mb-1">Video Description</label>
                        <textarea placeholder="Bio" className="textarea textarea-bordered w-full h-24 resize-none"></textarea>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn bg-orange-500 hover:bg-orange-600 text-white font-semibold mt-4">
                        Upload Video
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UploadVideos;

const courseModel = require('../models/courseModel');

const cloudinary = require('../config/cloudinary');

const videoModel = require('../models/videoModel');

const addNewCourse = async (req, res) => {

    const { title, description, price, couponCode, discountedPrice } = req.body;

    try {

        const userRole = req.user.role;

        if (userRole !== 'admin') {
            return res.status(403).json({
                success: false,
                message: "Forbidden: Only admins can add new courses"
            });
        }

        const newCourse = await  courseModel.create({
            title,
            description,
            price,
            couponCode,
            discountedPrice
        })

        return res.status(200).json({
            success: true,
            message: "New course added successfully",
            data: newCourse
        })
        
    } catch (error) {
        console.log("Internal server error",error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        })
        
    }
}


const getAllCourses = async (req, res) => {

    try {

        const courses = await courseModel.find({}).populate('videos');

        const getAllVideos = await videoModel.find({
            courseId: { $in: courses.map(course => course._id) }
        })

        

        const response = courses.map(course => {
            const videosForCourse = getAllVideos.filter(video => video.courseId.toString() === course._id.toString());
        });

        // console.log(response);
        return res.status(200).json({
            success: true,
            message: "Courses fetched successfully",
            data: courses
        })
        
    } catch (error) {
        console.log("Error While get the Course");
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}


const editCourseDetails = async(req,res)=>{

    const {courseId} = req.params;

    const detailsToUpdat = req.body;

    try {

        if(req.user.role !== 'admin'){
            return res.status(403).json({
                success:false,
                message:"Forbidden: Only admins can edit course details"
            })
        }

        // Find the course by ID and update its details

        const updatedCourse = await courseModel.findByIdAndUpdate(
            courseId,
            {$set:detailsToUpdat},
            {new:true} // To return the updated document
        )

        return res.status(200).json({
            success:true,
            message:"Course details updated successfully",
            data:updatedCourse
        })
        
    } catch (error) {
        console.log("Internal sever error while updating the coures",error);
        return res.status(500).json({
            success:false,
            message:"Internal server error",
            error:error.message
        })
    }
}

const deleteCourse= async(req,res)=>{

    const {courseId} = req.params;

    try {

        if(req.user.role !== 'admin'){
            return res.status(403).json({
                success:false,
                message:"Forbidden: Only admins can delete courses"
            })
        }

        // Find the course by ID and delete it

        await courseModel.findByIdAndDelete(courseId);

        return res.status(200).json({
            success:true,
            message:"Course deleted successfully"
        })
        
    } catch (error) {
        console.log("Internal server error while Deleting the course",error);
        return res.status(500).json({
            success:false,
            message:"Internal server error",
            error:error.message
        })
    }
}

const uploadVideo = async(req,res)=>{

    let filePath = req.file.path;

    const {courseId} = req.params;

    const {title, description} = req.body;

    if(req.user.role !== 'admin'){
        return res.status(403).json({
            success:false,
            message:"Forbidden: Only admins can upload videos"
        })
    }

    if(!filePath){
        return res.status(400).json({
            success:false,
            message:"Video file is required"
        })
    }

    try {

        const course = await courseModel.findById(courseId);

       

        if(!course){
            return res.status(404).json({
                success:false,
                message:"Course not found"
            })
        }

        // Upload the video to Cloudinary

        const response = await cloudinary.uploadVideoToCloudinary(filePath);

        const newVideo = await videoModel.create({
            courseId: course._id,
            title: title,
            description: description,
            videoUrl: response
        })

        course.videos.push(newVideo._id);

        await course.save();

        return res.status(200).json({
            success:true,
            message:"Video uploaded successfully",
            data:newVideo
        })

        
        
    } catch (error) {
        console.log("Internal server Error while adding the Video",error);
        return res.status(500).json({
            success:false,
            message:"Internal server error",
        })
    }
}

const deleteVideo = async(req,res)=>{

    const {videoId} = req.params;

    if(req.user.role !== 'admin'){
        return res.status(403).json({
            success:false,
            message:"Forbidden: Only admins can delete videos"
        })
    }

    try {
        
        const video = await videoModel.findById({_id:videoId});

    
        

        const getPublicId = video.videoUrl.split('/').slice(-1)[0].split('.')[0];

        

        const response = await cloudinary.deleteVideoFromCloudinary(getPublicId);

        console.log("Response from cloudinary while deleting the video",response);
        await videoModel.findByIdAndDelete(videoId);

        return res.status(200).json({
            success:true,
            message:"Video deleted successfully",
            
        })
    } catch (error) {
        
        console.log("Internal server error while deleting the video",error);

        return res.status(500).json({
            success:false,
            message:"Internal server error",
            error:error.message
        })
    }
}

const updateVideoDetails = async(req,res)=>{
    const {videoId} = req.params;

    const detailsToUpdate = req.body;

    if(req.user.role !== 'admin'){
        return res.status(403).json({
            success:false,
            message:"Forbidden: Only admins can update video details"
        })
    }

   try{

    const updatedVideo = await videoModel.findByIdAndUpdate(
        videoId,
        {$set:detailsToUpdate},
        {new:true}
    )

    return res.status(200).json({
        success:true,
        message:"Video details updated successfully",
        data:updatedVideo
    })

   }catch(error){
    console.log("Internal server error while updating the video details",error);

    return res.status(500).json({
        success:false,
        message:"Internal server error",
        error:error.message
    })
   }  
}

module.exports = {
    addNewCourse,
    getAllCourses,
    editCourseDetails,
    deleteCourse,
    uploadVideo,
    deleteVideo,
    updateVideoDetails
}
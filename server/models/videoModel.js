const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema(
    {
        courseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        },
        title:{
            type: String,
            required: true
        },
        description:{
            type: String
        },
        thumbnailUrl: {
            type: String,  // Cloudinary URL
            default: 'https://i.pinimg.com/1200x/e9/26/01/e9260100ea6b091e553421c0e6092284.jpg'
        },
        videoUrl: {
            type: String,    // Cloudinary URL
            required: true
        }
    }
    , { timestamps: true }
)

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
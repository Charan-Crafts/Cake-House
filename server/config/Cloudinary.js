const cloudinary = require('cloudinary').v2;

const fs = require('fs');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadVideoToCloudinary = async (filePath) => {

    

    try {
        if (!filePath) {
            throw new Error("File is required");
        }

        const response =await cloudinary.uploader.upload(filePath,
            {
                folder: "BakingWebsite/Videos",
                resource_type: "video",
                chunk_size: 6000000,
                timeout: 1200000
            }

        )

        fs.unlinkSync(filePath);

        // console.log("Reponse from the Cloudinary", response);
        
        return response.url;

        
    } catch (error) {
        console.log("Error while uploading the video to Cloudinary", error);
    }

}

const deleteVideoFromCloudinary = async(publicId)=>{

    try {

        const response = await cloudinary.uploader.destroy(publicId,{resource_type:"video"});

        return response;
        
    } catch (error) {
        console.log("Error while deleting the video from Cloudinary", error);
    }
}

module.exports = {
    uploadVideoToCloudinary,
    deleteVideoFromCloudinary
};
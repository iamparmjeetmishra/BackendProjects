import { v2 as cloudinary } from 'cloudinary';
import { response } from 'express';
import fs from 'fs'


cloudinary.config({ 
  cloud_name: 'process.env.CLOUDINARY_CLOUD_NAME', 
  api_key: 'process.env.CLOUDINARY_API_KEY', 
  api_secret: 'process.env.CLOUDINARY_API_SECRET' 
});

// This is enough for single step
// cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" },
//   function(error, result) {console.log(result); });



const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            // Upload to cloudinary
            const response = await cloudinary.uploader.upload(localFilePath, {
                resource_type : 'auto'
            })
        }
        // File has been successfully uploaded
        console.log('File Uploaded:', response.url)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the local saved temp file as the operation got failed
        return null
    }
}
s
export { uploadOnCloudinary };
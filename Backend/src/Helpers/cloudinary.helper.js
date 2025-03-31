import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'


    // Configuration
    cloudinary.config({ 
        cloud_name: 'dqzbkjg6f', 
        api_key: process.env.API_KEY, 
        api_secret: process.env.API_SECRET // Click 'View API Keys' above to copy your API secret
    });
    
    // Upload an image
    export const uploadOnCloud=async(localpath)=>{
        try {
            if(!localpath){
                console.log("localpath nhi aaya abhi")
                return false
            }
            const response=await cloudinary.uploader
            .upload(localpath,{
                fetch_format:'auto',
                resource_type:'auto',
            })
            //unlink file from temp folder
            fs.unlinkSync(localpath)
            if(!response){
                console.log("error in response if")
                return false
            }
            //unlink file from temp folder
            return response;


        } catch (error) {
            fs.unlinkSync(localpath);
            console.log({...error});
            return false;
        }
    }
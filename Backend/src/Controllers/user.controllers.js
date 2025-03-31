import z from 'zod'
import {user} from '../Models/User.models.js'
import { uploadOnCloud } from '../Helpers/cloudinary.helper.js';

export const registerUser=async(req,res)=>{
    //get email and password and username from user
    //check wether it recieved successfully or not 
    //check email and password using zod 
    //check if user already exist or not
    //create new user 
    //generate tokens 
    //return token user and mesaage 
    const {username,email,password,occupation}=req.body;
    if(!(username&&email&&password)){
        return res.status(400).json({message:"Please fill all fields"});
    }
    const userSchema=z.object({
        email:z.string().email(),
        password:z.string().min(8),
    })
    const error=userSchema.safeParse({email,password});
    if(!error.success){
        return res.status(400).json({message:"fudu na bna bhai"})
    }
    const userExist=await user.findOne({email});
    if(userExist){
        return res.status(400).json({message:"User already exist"})
    }
    if(req.file){
        const image=req.file.path;
        //---------------generating link from cloudinary to save image---------------------------
        var imageurl=await uploadOnCloud(image);
    }
    const newuserData={
        username:username,
        email:email,
        password:password,
        occupation:occupation
    }
    if(imageurl?.url){
        newuserData.profilePicture=imageurl.url;
    }
    const newUser=await user.create(newuserData);
    if(!newUser){
        return res.status(400).json({message:"User not created"})
    }
    const token=await newUser.generateToken();
    if(!token){
        return res.status(400).json({message:"token not generated"})
    }
    const selectedUser=newUser.toObject();
    delete selectedUser.password;
    return res.status(200).json({message:"User created successfully",selectedUser,token})
}

//---------------login function---------------------
export const login=async(req,res)=>{
    //get email and password from user
    //check whether email and password are correct format 
    //find user from database 
    //compare user password
    //generate token
    //return token and user 
    const {email,password}=req.body;
    if(!(email&&password)){
        return res.status(400).json({message:"all fields are required"});
    }
    const userSchema=z.object({
        email:z.string().email(),
        password:z.string().min(8)
    })
    const error=userSchema.safeParse({email,password});
    if(!error.success){
        return res.status(400).json({message:"fudu na bna bhai"});
    }
    const existUser=await user.findOne({email});
    if(!existUser){
        return res.status(400).json({message:"user do not exist"});
    }
    const isPasswordCorrect=existUser.comparePassword(password);
    if(!isPasswordCorrect){
        return res.status(400).json({message:"please enter a valid email or password"});
    }
    const token=await existUser.generateToken();
    if(!token){
        return res.status(500).json({message:"token generation failed "})
    }
    const selectedUser=existUser.toObject();
    delete selectedUser.password;

    return res.status(200).json({message:"login success",token,selectedUser})

}

//-------------------------delete user--------------------------
const deleteAccount=async()=>{

}
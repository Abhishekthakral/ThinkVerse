import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import argon from 'argon2'

//------------------------defining user schema -----------------------------------

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profilePicture:{
        type:String,
        default:'https://tse4.mm.bing.net/th?id=OIP.eXWcaYbEtO2uuexHM8sAwwHaHa&pid=Api&P=0&h=220'
    },
    occupation:{
        type:String
    }
},{timestamps:true});

//------------------------hashing password before saving data -----------------------
userSchema.pre("save",async function(next){
    if(!this.isModified('password')){
        next();
    }
    this.password=await argon.hash(this.password);
    next();
})

//------------------------------function to compare password --------------------------
userSchema.methods.comparePassword=async function(password){
    return await argon.verify(this.password,password)
}

//-------------------------------generating token-----------------------------------
userSchema.methods.generateToken=function(){
    try {
        return jwt.sign({
            _id:this._id,
            username:this.username,
            email:this.email
        },
        process.env.SECRET_KEY,
        {expiresIn:'1h'}
    )
    } catch (error) {
        console.log(error)
    }
}

//----------------------user model---------------------------------------

export const user=mongoose.model('user',userSchema)

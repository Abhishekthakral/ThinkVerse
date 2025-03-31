import mongoose from 'mongoose';

const blogSchema=new mongoose.Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true
    },
    explanation:{
        type:String,
        required:true
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'comment'
    }]
},{timestamps:true});

export const blog=mongoose.model('blog',blogSchema);
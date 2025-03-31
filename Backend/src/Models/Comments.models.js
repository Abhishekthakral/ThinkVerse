import mongoose from 'mongoose'


const commentSchema=new mongoose.Schema({
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    comment:{
        type:String,
        required:true
    }
},{timestamps:true});


export const comment=mongoose.model('comment',commentSchema);
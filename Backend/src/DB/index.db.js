import mongoose from 'mongoose';
const connectDB=async()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URL}/blogging`);
        console.log("database connected ...")
    } catch (error) {
        console.log("error in connecting database"+error)
    }
}

export default connectDB;
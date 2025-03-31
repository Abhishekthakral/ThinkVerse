import connectDB from "./src/DB/index.db.js";
import app from "./src/app.js";
import dotenv from 'dotenv';

dotenv.config({
     path:'./.env'
})

connectDB()
.then(()=>{
    app.listen(3000,()=>console.log("server running successfully"))
})
.catch((e)=>console.log(e + 'error while running server'))
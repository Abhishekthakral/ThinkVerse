import { Router } from "express";
import { login, registerUser } from "../Controllers/user.controllers.js";
import { upload } from "../Middlewares/multer.middleware.js";

const userrouter=Router();
//------------signup route-----------------------
userrouter.route('/signin').post(upload.single('image'),registerUser);
//-------------login route-----------------------
userrouter.route('/login').post(login)





export default userrouter;
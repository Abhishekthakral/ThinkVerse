import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import userrouter from './Routes/user.router.js';
import blogrouter from './Routes/blog.routes.js';

const app=express();

//initializing some general middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));

//directing user based requests to user
app.use('/api/v1/user',userrouter);
app.use('/api/v1/blog',blogrouter);



export default app;
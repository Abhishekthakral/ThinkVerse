import { Router } from "express";
import { allBlogs, createBlog, createComment, ownerBlogs, particularData } from "../Controllers/blog.controllers.js";

const blogrouter=Router();

blogrouter.route('/create').post(createBlog);

blogrouter.route('/allBlog').get(allBlogs);

blogrouter.route('/personal').post(ownerBlogs);

blogrouter.route('/comment').post(createComment);

blogrouter.route('/:id').get(particularData);





export default blogrouter;
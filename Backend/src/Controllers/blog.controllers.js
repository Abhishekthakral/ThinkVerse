import { blog } from "../Models/Blog.models.js";
import { comment } from "../Models/Comments.models.js";

export const createBlog = async (req, res) => {
    //get title,owner id,description,explanation from user
    //check whether it received or not 
    //create it in database 
    try {
        const { title, owner, description, explanation } = req.body;
        if (!(title && description && explanation)) {
            return res.status(400).json({ message: "enter all fields" })
        }
        const createdBlog = await blog.create({
            title: title,
            owner: owner,
            description: description,
            explanation: explanation
        })
        res.status(201).json({ message: "blog created", data: createdBlog })
    } catch (error) {
        console.log(error + 'error in create Blog function')
    }
}

export const allBlogs = async (req, res) => {
    try {
        //get all blogs from database 
        //send blogowner photo,name and occupation with blogs to the frontend 
        const allBlogs = await blog.find().sort({ _id: -1 }).populate("owner", "username profilePicture occupation")
        return res.json({ data: allBlogs })
    } catch (error) {
        console.log("error in all  blogs function" + error);
    }
}

export const particularData = async (req, res) => {
    try {
        //get id from users
        const { id } = req.params
        if (!id) {
            return res.status(400).json("failed to get this data");
        }
        const blogdata = await blog.findById(id)
            .populate("owner", "username profilePicture occupation")
            .populate({
                path: "comments",
                options: { sort: { _id: -1 } },
                populate: {
                    path: "createdBy",
                    select: "profilePicture username"
                }
            });
        return res.json({ data: blogdata });
    } catch (error) {
        console.log("error in fetching particularData" + error)
    }
}

export const ownerBlogs = async (req, res) => {
    //get owner id from frontend
    //find blogs posted by that particular owner
    try {
        const { userid } = req.body
        if (!userid) {
            return res.status(400).json("failed to get data")
        }
        const blogsposted = await blog.find({ owner: userid }).sort({ _id: -1 });
        if (!blogsposted) {
            return null
        }
        return res.status(200).json({ data: blogsposted, success: true });
    } catch (error) {
        console.log(...error)
    }
}

export const createComment = async (req, res) => {
    //find that blog from database
    //check whether required fiels are recieved or not
    //create comment
    //push that comment in blog.comments
    const { blogid, Usercomment, userid } = req.body;
    if (!(blogid && Usercomment)) {
        return res.status(400).json("failed to create comment")
    }
    try {
        const blogdata = await blog.findById(blogid);
        if (!blogdata) {
            console.log("error aagya blog dhundne me");
        }
        const commentCreated = await comment.create({
            createdBy: userid,
            comment: Usercomment
        });
        if (!commentCreated) {
            return res.status(400).json("bhai nhi hua create")
        }
        blogdata.comments.push(commentCreated._id);
        await blogdata.save();
        return res.status(200).json("comment created successfully");
    } catch (error) {
        console.log("create krne me error aara ha bhai")
    }
}


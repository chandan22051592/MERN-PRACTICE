const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin,Course} = require('../db/index')
const router = Router();

// Admin Routes
router.post('/signup', async(req, res) => {
    const user = req.body.username;
    const pass = req.body.password;

    // check if admin already exists or not 
    await Admin.create({
        username : user,
        password : pass
    })

    res.json({
        msg : "Admin created Successfully"
    })

    // Implement admin signup logic
});

router.post('/courses', adminMiddleware,async (req, res) => {
    // try to use zod
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink; 

    const newCourse = await Course.create({
         // if you know the key and value is so you don't have to wrtie like this : "title:title"
        title,
        description,
        price,
        imageLink,
    })

    res.json({
        msg:"Course Created Successfully",
        CourseId : newCourse._id
    })
});


router.get('/courses', adminMiddleware, async(req, res) => {
    const allCourses = await Course.find({});
    res.json(allCourses);
    
});

module.exports = router;
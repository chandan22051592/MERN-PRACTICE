const { Router } = require("express");
const jwt = require("jsonwebtoken");
const adminMiddleware = require("../middleware/admin");
const {Admin,Course} = require('../db')
const router = Router();
const secret_key = "My_Secret_key";

// Admin Routes
router.post('/signup', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username,
        password
    })

    res.json({
        msg : "Admin Created Successfully"
    })

    
});

router.post('/signin', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    const user = await Admin.findOne({username});
    if(user){
        const token = jwt.sign({username,password},secret_key);
        res.json({
            token

        })
    }else{
        res.json({
            msg : "Admin not found"
        })
    }
});

router.post('/courses', adminMiddleware, (req, res) => {

    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink; 

    try {
        const newCourse = Course.create({
            title,
            description,
            price,
            imageLink
        })
    
        res.json({
            msg : "Course created successfully",
            courseId : newCourse._id
        })   
    } catch (error) {
        console.log(error)
        res.json({
            msg : `Error while creating new course `
        })  
    }  
});

router.get('/courses', adminMiddleware, async(req, res) => {
    const allCourse = await Course.find({});
    res.json({
        allCourse
    })
});

module.exports = router;
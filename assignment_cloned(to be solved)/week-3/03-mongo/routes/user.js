const { Router } = require("express");
const router = Router();
const {User,Course} = require("../db")
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async(req, res) => {
    const user = req.body.username;
    const pass = req.body.password;

    await User.create({
        username : user,
        password :pass
    })

    res.json({
        msg:"User created successfully"
    })
});

router.get('/courses', userMiddleware,async(req, res) => {
    const allCourses = await Course.find({});
    res.json(allCourses);
    
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;
    try{
        await User.updateOne({
            username : username
        },{
            "$push":{
                purchasedCourse: courseId
            }
        })
    }catch(e){
        console.log("error" + e);
    }
    
    res.json({
        msg : "Course Purchased Successfully"
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    const username = req.headers.username;
    // const user = (await User.findOne({ username }).populate("purchasedCourse").exec()).purchasedCourse;

    // --------------OR-----------------
    const user = await User.findOne({username})
    console.log(user.purchasedCourse)
    const courses = await Course.find({
        _id : {
            "$in" : user.purchasedCourse
        }
    })

    console.log(user);
    res.json({
        user
    })

    
});

module.exports = router
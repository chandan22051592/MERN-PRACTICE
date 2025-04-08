const mongoose = require("mongoose");

const UserSchema = new mongoose.schema({
    email:String,
    password : String,
    purchasedCourses : [{
        type:mongoose.schema.Types.ObjectId,
        ref:'Course'
    }]
});

const CourseSchema = new mongoose.schema({
    title:String,
    price:5999
});
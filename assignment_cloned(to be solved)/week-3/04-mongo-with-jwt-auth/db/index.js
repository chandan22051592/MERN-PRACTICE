const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb+srv://aman123:Akamanboss%401@cluster0.oqj0vy6.mongodb.net/course_selling_app?retryWrites=true&w=majority&appName=Cluster0", {
  })
  .then(()=>console.log("Connecte to MongoDb"))
  .catch((err)=>console.log("Connection error"))



const AdminSchema = new mongoose.Schema({
    username : String,
    password : String

});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String,
    purchasedCourses:[{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    title : String,
    description : String,
    price : Number,
    imageLink : String,
    published : Boolean 
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
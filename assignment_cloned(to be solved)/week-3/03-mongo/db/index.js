const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb+srv://aman123:Akamanboss%401@cluster0.oqj0vy6.mongodb.net/course_selling_app?retryWrites=true&w=majority&appName=Cluster0", {
  })
  .then(()=>console.log("Connecte to MongoDb"))
  .catch((err)=>console.log("Connection error"))

// Define schemas
const AdminSchema = new mongoose.Schema({
    username : String,
    password :String

    // Schema definition here
});

const UserSchema = new mongoose.Schema({
    username : String,
    password :String,
    purchasedCourse : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Course'

    }]
    // Schema definition here
});

const CourseSchema = new mongoose.Schema({
    title : String,
    description : String,
    price : Number,
    imageLink : String,
    published : Boolean 
    // Schema definition here
});

const Admin = mongoose.model('admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}


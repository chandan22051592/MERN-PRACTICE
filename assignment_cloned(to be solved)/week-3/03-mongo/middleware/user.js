const {User} = require('../db/index')

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const user= req.headers.username;
    const pass = req.headers.password;
    User.findOne({
        username : user,
        password : pass
    }).then(function(value){
        if(value){
            next();
        }else{
            res.status(403).json({
                msg : 'User does not exists'

            })
        }
    })
}

module.exports = userMiddleware;
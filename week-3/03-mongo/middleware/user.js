const {User} = require("../db")

// Middleware for handling auth
function userMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    user.findOne({
        username: username,
        password: password
    })
    .then(function(value){
        if (value) {
            next();
        } else {
            res.status(403).json({
                msg: "User Does not Exist"
            })
        }
    })
        
}

module.exports = adminMiddleware;
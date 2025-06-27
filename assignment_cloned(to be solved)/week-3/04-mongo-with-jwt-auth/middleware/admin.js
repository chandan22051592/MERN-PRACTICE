const jwt = require("jsonwebtoken");
const secret_key = "My_Secret_key";

function adminMiddleware(req, res, next) {
    const authHeader = req.headers["authorization"];
    if (!authHeader) return res.status(401).json({ message: "No token provided" });
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token,secret_key);
        next();
        
    } catch (error) {
        return res.status(403).json({
            msg : "Invalid token"
        })
        
    }
}

module.exports = adminMiddleware;
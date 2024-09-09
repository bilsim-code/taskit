const jwt = require('jsonwebtoken');

const authMiddleware = async(req, res, next) => {
    try {
        const {token} = req.headers;
        if(!token) {
            return res.json({success: false, message: "Authentication failed"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.headers.userId = decoded.userId
        
    } catch (error) {
        
    }
}

module.exports = authMiddleware;
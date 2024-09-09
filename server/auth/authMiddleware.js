const jwt = require('jsonwebtoken');

const authMiddleware = async(req, res, next) => {
    try {
        const {token} = req.headers;
        if(!token) {
            return res.json({success: false, message: "Authentication failed!"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = decoded.userId
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Authentication error"});
    }
}

module.exports = authMiddleware;
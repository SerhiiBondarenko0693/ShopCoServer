const jwt = require('jsonwebtoken');
const {secret} = require("../userConfig")

const authMiddleware = (req, res, next) =>{

    try {
        const token = req.headers.authorization;
        if(!token){
            return res.status(403).json({"message":"user not auth"});
        }
        const decodeData = jwt.verify(token, secret);
        req.user = decodeData;
        next()

    }catch (error) {
        res.status(403).json({message:"user not auth"});
    }
}
module.exports = authMiddleware

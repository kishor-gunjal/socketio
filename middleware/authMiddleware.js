const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
    try{
         if(!req.headers.authorization){
             return res.status(401).json({
                    message: 'You are not authorized'
             });
         }else{
            const {userId} =jwt.verify(req.headers.authorization,process.env.jwtSecret);
            req.userId = userId;
            next();
         }
        

    }
    catch(err){
        res.status(401).json({
            message: 'Auth failed'
        });
    }
}
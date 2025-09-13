const jwt =require("jsonwebtoken");
const JWT_SECRET = "this is a jwt secret";
const auth=function(req,res,next){
    const token = req.headers.token
        try{
            const decodedjwt=jwt.verify(token,JWT_SECRET)
            if(decodedjwt){
                req.id = decodedjwt.id;
                next()
            }else{
                res.status(403).json({
                    message:"Invalid Token"
                })
            }
        }catch(err){
            res.status(403).json({
                message:"Error while Validating JWT"
            })
        }
    }

module.exports={
    auth,
    JWT_SECRET
}
import User from "../modules/User.model.js";

export const createUser = async(req,res)=>{
   
try {

    const {username , password , email} = req.body;

    const isUserExists  = await User.findOne({
        $or: [{email : email.toLowerCase()},{username : username.toLowerCase()}]
    });

    if(isUserExists){
        if(isUserExists.email === email.toLowerCase()) return res.status(401).send("email already exists");
        if(isUserExists.username === username.toLowerCase()) return res.status(401).send("username already exists");

    }

    
} catch (error) {
    console.log("error at user registerUser", err);
    res.status(400).send(err.message);
}

}
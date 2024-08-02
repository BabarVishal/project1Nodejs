const User = require("../models/user.model");

async function handleGetAllUsers(req, res){
   const allUsers = await User.find({});
   return res.json(allUsers);
}

async function handlegetUserById(req, res){
   const user = await User.findById(req.params.id);
   if(!user) return res.status(404).json({err: "user not found"});
   return res.json(user);
}

async function handleUpdteUserbyID(req, res){
    const body = req.body;
    if(!(body || body.fistName || body.lastName || body.email)){
        return res.status(400).json({msg: "All Fields are req..."});
    }

   const result = await User.create({
    fistName: body.fistName,
    lastName: body.lastName,
    email: body.lastName
   })
console.log(result);
   return res.status(201).json({msg: "Success"});
}

async function handleDeleteUserbyID(req, res){
   await User.findByIdAndDelete(req.params.id);
    return res.json({status: "Success"});
}

async function handleCreateUserbyID(req, res){
    const body = req.body;
    if(!(body || body.fistName || body.lastName || body.email)){
        return res.status(400).json({msg: "All Fields are req..."});
    }

   const result = await User.create({
    fistName: body.fistName,
    lastName: body.lastName,
    email: body.email
   })
console.log(result);
   return res.status(201).json({msg: "Success", id: result._id});
 }




module.exports = {
    handleGetAllUsers,
    handlegetUserById,
    handleUpdteUserbyID,
    handleDeleteUserbyID,
    handleCreateUserbyID
}
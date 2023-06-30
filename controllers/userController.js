const userModel = require("../models/userModel");

const handleGetAllUsers = async (req, res) => {
    try{
    const allUsers = await userModel.find({})
    return res.status(200).send({
        userCount:allUsers.length,
        success:true,
        message:'fetched all users successfully',
        allUsers
    })
    }
    catch(error){
        console.log("Error:"+error)
        res.status(500).send({
            success:false,
            message:"Error in getting all users",
            error
        })
    }
}

const handleGetUserById = async (req, res) => {
    const user = await userModel.findById(req.params.id)
    if (!user) return req.status(404).send({sucess:false, msg: "User does not exists" });
    res.status(200).send({success:true,msg:"Got the user",user})
  }

const handleAddNewUser = async (req, res) => {
    try{
      const body = req.body;
      //validation
      if (!body.first_name ||!body.last_name ||!body.email ||!body.gender ||  !body.job_title) {
        return res.status(400).json({ msg: "All fields are required." });
      }
      //existing user
      const email = body.email;
      const existingUser = await userModel.findOne({email})
      if(existingUser){
        return res.status(400).send({
            success:false,
            message:"User already exists"
        })
      }
      const user = await userModel.create({
        firstName : body.first_name,
        lastName : body.last_name,
        email : body.email,
        gender:body.gender,
        jobTitle : body.job_title
      })
      return res.status(201).json({msg:"User Created"})
    }
    catch(error){
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"Could not create user",
            error
        })
    }
    }

const handleUpdateUser = async (req, res) => {
    try{
        const {id} = req.params
        const user = await userModel.findByIdAndUpdate(id,{...req.body},{new:true})
        return res.status(200).send({
            success:true,
            msg:"User info updated",
            user
        })
    }catch(error){
        console.log(error)
        return res.status(400).send({
            success:false,
            msg:"Error while Updating user",
            error
        })
    }
  }

const handleDeleteUser = async (req, res) => {
    try{
    const {id} = req.params
    const user = await userModel.findByIdAndDelete(id)
    if(!user){
        return res.status(400).send({
            success:false,
            msg:"User does not exits"
        })
    }
    return res.status(200).send({
        success:true,
        msg:"User Deleted Successfully"
    })
    }catch(error){
        console.log(error)
        return res.status(500).send({
            success:false,
            msg:"Error in Deleting user",
            error
        })
    }

  }


module.exports = {handleGetAllUsers,handleGetUserById,handleUpdateUser,handleAddNewUser,handleDeleteUser}
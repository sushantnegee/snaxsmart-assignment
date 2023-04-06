const Admin = require('../models/adminModels')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerAdmin = async (req,res)=>{
    const {name,email,password} = req.body;
    const  admin = Admin.findOne({email})

    if(admin){
        return res.status(400).json({message:'User Already Exists'})
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newAdmin = await Admin.create({name,email,password:hashedPassword});

    if(newAdmin){
    const token = jwt.sign({ userId: newAdmin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({
        _id:newAdmin._id,
        name:newAdmin.name,
        email:newAdmin.email,
        pic: newAdmin.pic,
        token:token,
    })
}else{
    throw new Error("Failed to Create Admin")
}
}

module.exports = {registerAdmin,authAdmin}
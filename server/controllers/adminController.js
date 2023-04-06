const Admin = require("../models/adminModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerAdmin = async (req, res) => {
  const { name, email, password } = req.body;
  const admin = await Admin.findOne({ name });
//   console.log(admin)//

  if (admin) {
    return res.status(400).json({ message: "User Already Exists" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newAdmin = await Admin.create({
    name,
    email,
    password: hashedPassword,
  });

  if (newAdmin) {
    const token = jwt.sign({ adminId: newAdmin._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({
      _id: newAdmin._id,
      name: newAdmin.name,
      email: newAdmin.email,
      pic: newAdmin.pic,
      token: token,
    });
  } else {
    throw new Error("Failed to Create account");
  }
};

const authAdmin = async(req,res)=>{
const {email,password}  = req.body;
try {
    const admin = await Admin.findOne({email});
    if(!admin){
        res.status(401)
        throw new Error('Invalid email or passswords')
    }

    const validPassword = await bcrypt.compare(password,admin.password);
    if(!validPassword){
        res.status(400)
        .json({message:'Invalid Credentials'})
    }
    const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      console.log(token) //
      res.status(201).json({
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        token: token, 
      });

} catch (error) {
    res.status(500).json({ message: error.message });
}

}

module.exports = { registerAdmin, authAdmin };

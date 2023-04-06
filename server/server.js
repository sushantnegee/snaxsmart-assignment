const express = require("express")
const dotenv = require("dotenv");
const connectDataBase = require("./config/database");
const adminRoute = require('./routes/adminRoutes')

const app = express();

dotenv.config();
app.use(express.json());


app.use('/admin',adminRoute);
connectDataBase();
app.get("/", (req, res) => {
    res.send("API is running..");
  });   
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`listning to port  http//localhost:${PORT}`)
})
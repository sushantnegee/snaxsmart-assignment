const express = require("express")
const dotenv = require("dotenv");
const connectDataBase = require("./config/database");
const adminRoute = require('./routes/adminRoutes')
const machineRoute = require('./routes/machineRoutes')
const cors = require('cors')

const app = express();
app.use(cors())

dotenv.config();
app.use(express.json());
connectDataBase();


app.use('/admin',adminRoute);
app.use('/machines',machineRoute);

app.get("/", (req, res) => {
    res.send("API is running..");
  });   
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`listning to port  http//localhost:${PORT}`)
})
const express = require("express")
const router = express.router();

router.post("/register",registerAdmin)
router.post("/login",authAdmin)
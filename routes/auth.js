const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authMiddleware = require("../midleware/authMiddleware");
const User = require("../models/User");



router.post('/login', (req,res)=>{
	const {email, password } = req.body;
	const user = await User.find({email});
	if (!user) return res.status(401).json({err: "Inavlid email"});
	if (password !== user.password){
		return res.status(401).json({err: "Wrong password" });
	}	
	
		
	const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN)		
	res.json({ accessToken: accessToken }) 	
})


module.export = router

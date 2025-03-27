const express = require('express');
const router = express.Router();

router.post('/login', (req,res)=>{
	const email = req.body.username
	const user = { name : email} 
	
	const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN)		
	res.json({ accessToken: accessToken }) 	
})

function authenticateToken(req, res, next){
	const authHeader = req.headers['

}

module.export = router

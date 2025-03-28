const express = require ('express');
const router = express.Router();
const User = require('../models/User');
	
//get all users
router.get('/',(req,res)=>{
	User.find()
		.then( users => res.json(users))
});

//create new user 
router.post('/',(req,res)=>{
	const { firstname, lastname, email, password, accessLevel} = req.body;
	const user = new User ({ firstname, lastname, email, pasword, accessLevel});	
	return user.save
});

//get user by id 
router.get('/:id' , (req,res)=>{
	User.findById(req.params.id)
		.then(user =>{
			if (!user) res.status(404).json({ err: 'User not found});
			res.json(user);
		})
});


module.export = router 


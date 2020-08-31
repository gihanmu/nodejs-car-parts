const express = require('express');
const User = require('../models/user');
const router = express.Router();


router.get('/users', async (req, res) => {
    console.log('Users')
});

//Create user
router.post('/user', async (req, res) => {
    try {
        const user = User(req.body);
        await user.save();

        res.status(201).send({'message' : 'User created successfully', user})
    }catch(error) {
        res.status(500).send({'message': 'Error in user creation', error})
    }
    
})

module.exports = router;
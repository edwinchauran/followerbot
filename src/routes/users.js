// srca
const express = require('express');
const router = new express.Router();

router.get('/signin', (req, res) => {
    res.render('users/signin');
})
router.get('/signup', (req, res) =>{
    res.send('users/signup');
})
module.exports = router;
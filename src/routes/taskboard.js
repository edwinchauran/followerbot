// srca
const express = require('express');
const router = express.Router();
const Account = require('../models/Account');
// Note
router.post('/taskboard', async (req, res) => {
    const {username, password, accountToFollow} = req.body;
    const errors = [];
    if(!username) {
        errors.push({text: 'please type a username'});
    }
    if(!password) {
        errors.push({text: 'please type a password'})
    }
    if(!accountToFollow) {
        errors.push({text: 'please type a password'})
    }
    if(errors.length > 0) {
        res.render('followerbot/taskboard', {
            errors,
            username,
            password,
            accountToFollow
        })
    } else {
        const newAccount = new Account({ username, password, accountToFollow});
        await newAccount.save();
        res.redirect('/taskboard');
        console.log(newAccount);
        res.send('ok');
    }
})

router.get('/taskboard',  async (req, res) => {
        const datos = await Account.find();
        res.render('followerbot/taskboard', {datos});
})
module.exports = router;
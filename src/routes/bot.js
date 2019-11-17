const express = require('express');
const router = express.Router();
const Account = require('../models/Account');

router.post('/bot', async (req, res) => {
    const cod = req.body;
    const dato = await Account.find({id:cod})
    res.render('followerbot/bot', {id});
})

router.get('/bot', async (req, res) => {
    if(!req.query) {
        res.redirect('/taskboard');
    }
    else {
        const cod = req.query.name;
        // res.send(cod);
        // const username = await Account.find({accountToFollow: {username:cod}});
        // const accountToFollow = await Account.find({$filter : { accountToFollow: {$eq: cod}}});
        const datos = await Account.find({username:cod});
        res.render('followerbot/bot', {datos});
    }
})
module.exports = router;
//
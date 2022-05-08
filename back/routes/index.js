const express = require('express');
const User = require('../schemas/user');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const user = await User.find({});
        res.render('mongoose', { user });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;
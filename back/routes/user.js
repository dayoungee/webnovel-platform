const express = require('express');
const User = require('../schemas/user');

const router = express.Router();

router.route('/')
    .get(async (req, res, next) => {
        try {
            const user = await User.find({});
            res.json(user);
        } catch (err) {
            console.error(err);
            next(err);
        }
    })
    .post(async (req, res, next) => {
        try {
            const user = await User.create({
                email: req.body.email,
                password: req.body.password,
                nickname: req.body.nickname,
            });
            console.log(user);
            res.status(201).json(user);
        } catch (err) {
            console.error(err);
            next(err);
        }
    });

module.exports = router;
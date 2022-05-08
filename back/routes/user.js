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
                name: req.body.name,
                nickname: req.body.nickname,
                password: req.body.password,
            });
            console.log(user);
            res.status(201).json(user);
        } catch (err) {
            console.error(err);
            next(err);
        }
    });

module.exports = router;
const express = require('express');
const User = require('../schemas/user');
const bcrypt = require('bcrypt');  // 비밀번호 암호화 라이브러리
const passport = require('passport');
const router = express.Router();

// POST /user/login
router.post('/login',(req,res,next) =>{
    passport.authenticate('local',(err, user, info)=> {
        if (err) {
            console.error(err);
            return next(err);
        }
        if(info){
            return res.status(401).send(info.reason);
        }
        return req.login(user, async (loginErr)=>{ // 패릇포트 로그인
           if(loginErr){
               return next(loginErr);
           }
            return res.status(200).json(user);
        });
    })(req, res, next);
});

router.route('/')
    .get(async (req, res, next) => {
        try {
            const user = await User.find({});
            res.json(user);
            console.log(user);
        } catch (err) {
            console.error(err);
            next(err);
        }
    })
    .post(async (req, res, next) => {
        try {
            const exUser = await User.findOne({
                email: req.body.email,
            });
            if(exUser){
                return res.status(403).send('이미 사용중인 아이디입니다.');
            }
            const hashedPassword = await bcrypt.hash(req.body.password,12); // 숫자는 높을 수록 보안이 세진다. 대신 시간이 오래걸린다.
            const user = await User.create({
                email: req.body.email,
                password: hashedPassword,
                nickname: req.body.nickname,
            });
            console.log(user);
            res.status(201).json(user);
            //res.status(200).send('OK');
        } catch (err) {
            console.error(err);
            next(err);
        }
    });

router.post('/logout',(req, res, next)=>{
    req.logout();
    req.session.destroy();
    res.send('OK');
});

module.exports = router;
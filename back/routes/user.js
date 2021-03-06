const express = require('express');
const User = require('../schemas/user');
const bcrypt = require('bcrypt');  // 비밀번호 암호화 라이브러리
const passport = require('passport');
const router = express.Router();
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');

// POST /user/login 로그인하기
router.post('/user/login', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (info) {
            return res.status(401).send(info.reason);
        }
        return req.login(user, async (loginErr) => { // 패릇포트 로그인
            if (loginErr) {
                return next(loginErr);
            }
            return res.status(200).json(user);
        });
    })(req, res, next);
});

router.route('/user') // GET /user // 로그인 정보 매번 가져오기
    .get(async (req, res, next) => {
        try {
            if (req.user) {
                const user = await User.findOne({_id: req.user._id,});
                res.json(user);
            } else {
                res.status(200).json(null);
            }
        } catch (err) {
            console.error(err);
            next(err);
        }
    })
    .post(isNotLoggedIn, async (req, res, next) => { // POST /user 회원가입
        try {
            const exUser = await User.findOne({
                email: req.body.email,
            });
            if (exUser) {
                if(exUser.naverId){
                    return res.status(403).send('네이버로 회원가입 하셨었네요.');
                }
                return res.status(403).send('이미 사용중인 아이디입니다.');
            }
            const hashedPassword = await bcrypt.hash(req.body.password, 12); // 숫자는 높을 수록 보안이 세진다. 대신 시간이 오래걸린다.
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

router.get('/user/login/naver', passport.authenticate('naver', {
    //authType: 'reprompt',
    authType: 'reprompt', scope: ['public_profile', 'email']
}));

router.get('/login/naver/callback', passport.authenticate('naver', {
        failureRedirect: '/'
    }),
    (req, res) => {
        console.log(req.user);
        if (!req.user) {
            return res.redirect('http://localhost:3003/login');
        }
        req.login(req.user, (err) => {
            return res.redirect('http://localhost:3003/');
        });
        //res.redirect('http://localhost:3003/');
        //    res.status(202).send('OK');
    });

// 로그아웃 //Post /user/logout
router.post('/user/logout', isLoggedIn, (req, res, next) => {
    req.logout();
    req.session.destroy();
    res.send('OK');
    res.redirect('http://localhost:3003/');
});

module.exports = router;
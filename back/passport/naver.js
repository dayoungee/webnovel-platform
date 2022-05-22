const passport = require('passport');
const NaverStrategy  = require('passport-naver').Strategy;;

const User = require('../schemas/user'); // 구조분해할당하면 안됨

module.exports = () => {
    passport.use(new NaverStrategy({
        clientID: process.env.NAVER_ID,
        clientSecret: process.env.NAVER_SECRET,
        callbackURL: process.env.NAVER_CALLBACK_URL,
        passReqToCallback: true,
    }, async(req, accessToken, refreshToken, profile, done) => {
        try{
            console.log("=============================== : " + profile.id);
            User.findOne({ naverId: profile.id }, async(err, user) => {
                if (user) {
                    return done(err, user);
                } // 회원 정보가 있으면 로그인
                const newUser = await User.create({
                    email: 'asdasd',
                    nickname: 'dsad',
                    password: 'dd',
                });
                return done(null, newUser);
            });
        }
        catch (err){
            console.error(err);
            return done(err);
        }

    }));
};
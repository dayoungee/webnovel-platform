const passport = require('passport');
const { Strategy: NaverStrategy, Profile: NaverProfile } = require('passport-naver-v2');

const User = require('../schemas/user'); // 구조분해할당하면 안됨

module.exports = () => {
    passport.use(new NaverStrategy({
        clientID: process.env.NAVER_ID,
        clientSecret: process.env.NAVER_SECRET,
        callbackURL: process.env.NAVER_CALLBACK_URL,
    }, async (accessToken, refreshToken, profile, done) => {
        try{
            const user = await User.findOne({
                naverId: profile.naverId,
                provider: 'naver'
            });
            console.log(naverId + " profile.naverId : " +  profile.naverId);
            if(user){
                done(null, user);
            }else{
                const newUser = await User.create({
                    email: profile.email,
                    nickname: profile.nickname,
                    naverId: profile.naverId,
                    provider: 'naver',
                })
                done(null, newUser);
            }
        }
        catch (err){
            console.error(error);
            done(error);
        }

    }));
};
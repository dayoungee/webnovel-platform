import passport from "passport";
import User  from "../schemas/user";

// strategy 생성
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
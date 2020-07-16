import passport from "passport";
import User from "./models/User";

// Strategy: 로그인하는 방식으로, email 로그인, socialLogin 등이 해당됨
passport.use(User.createStrategy());

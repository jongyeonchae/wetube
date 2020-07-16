import passport from "passport";
import User from "./models/User";

// Strategy: 로그인하는 방식으로, email 로그인, socialLogin 등이 해당됨
passport.use(User.createStrategy());

// serialization: 쿠키에게 전달하는 정보로, 클라이언트가 받게 될 정보(eg. user.id)를 의미
// deserialization: 쿠키의 정보를 사용자로 전환하는 방법(eg. 쿠키가 전달한 user.id를 가진 user 찾기)
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

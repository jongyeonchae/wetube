import passport from "passport";
import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
import User from "./models/User";
import {
  githubLoginCallback,
  facebookLoginCallback,
} from "./controllers/userController";
import routes from "./routes";

// Strategy: 로그인하는 방식으로, email 로그인, socialLogin 등이 해당됨
passport.use(User.createStrategy());

// github 로그인 인증을 위해, github에 사용자(application) 정보를 주고 받기 위한 설정
passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCallback}`,
    },
    githubLoginCallback
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FB_ID,
      clientSecret: process.env.FB_SECRET,
      // callbackURL 에 https 를 적용하기 위해 ngrok 주소 사용
      callbackURL: `https://cbbf2280ce94.ngrok.io${routes.facebookCallback}`,
      profileFields: ["id", "displayName", "photos", "email"],
      scope: ["public_profile", "email"],
    },
    facebookLoginCallback
  )
);

// serialization: 쿠키에게 전달하는 정보로, 클라이언트가 받게 될 정보(eg. user.id)를 의미
// deserialization: 쿠키의 정보를 사용자로 전환하는 방법(eg. 쿠키가 전달한 user.id를 가진 user 찾기)
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

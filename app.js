// [ express application로 서버 만들기 ]
// require: 내 파일 또는 폴더(node_modules) 내 "express" 이름을 가진 파일을 찾아 불러들임

// babel 사용 위해 ES6 형식으로 JS 작성
import express from "express";

// [ morgan 불러오기 ]
import morgan from "morgan";

// [ helmet 불러오기 ]
import helmet from "helmet";

import cookieParser from "cookie-parser";

import bodyParser from "body-parser";

import passport from "passport";

import mongoose from "mongoose";

import session from "express-session";

import MongoStore from "connect-mongo";

import { localsMiddleware } from "./middlewares";

import routes from "./routes";

import userRouter from "./routers/userRouter";

import videoRouter from "./routers/videoRouter";

import globalRouter from "./routers/globalRouter";

import "./passport";

const app = express();

const CookieStore = MongoStore(session);

// [ helmet 전체 middleware로 적용하기 ]
// helmet: 보안 담당.
app.use(helmet());

// [ pug를 view engine으로 설정하기 ]
app.set("view engine", "pug");
// [ uploads route 설정 ]
// express.static(디렉토리명): 디렉토리에서 (정적) 파일을 찾아주는 built-in middleware
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// [ morgan 전체 middleware로 적용하기 ]
// morgan: 로깅을 관리. tiny, dev, combined, common, short 을 옵션으로 제공.
app.use(morgan("dev"));

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    // session 정보를 CookieStore 에 저장하여, 새로고침하여도 로그인 정보가 휘발되지 않도록 함
    store: new CookieStore({ mongooseConnection: mongoose.connection }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);

// [ middleware로 connection 끊기 ]
// route 전에 middleware가 response를 하면 connection이 끊김
/* const middlewareDisconnect = (req, res, next) => {
  res.send("not happening");
}; */

// [ routes 명 변경하기 ]
app.use(routes.home, globalRouter);

app.use(routes.users, userRouter);

app.use(routes.videos, videoRouter);

// [app 오브젝트 export 하기]
// 다른 파일에서 import 요청 시, app 오브젝트 import 허용
export default app;

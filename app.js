// [ express application로 서버 만들기 ]
// require: 내 파일 또는 폴더(node_modules) 내 "express" 이름을 가진 파일을 찾아 불러들임

// babel 사용 위해 ES6 형식으로 JS 작성
import express from "express";

// [ morgan 불러오기 ]
import morgan from "morgan";

// [ helmet 불러오기 ]
import helmet from "helmet";

/*import cookieParser from "cookie-parser";

import bodyParser from "body-parser";*/

import userRouter from "./routers/userRouter";

import videoRouter from "./routers/videoRouter";

import globalRouter from "./routers/globalRouter";

const app = express();

// [ helmet 전체 middleware로 적용하기 ]
// helmet: 보안 담당.
app.use(helmet());

// [ morgan 전체 middleware로 적용하기 ]
// morgan: 로깅을 관리. tiny, dev, combined, common, short 을 옵션으로 제공.
app.use(morgan("dev"));

// [ middleware로 connection 끊기 ]
// route 전에 middleware가 response를 하면 connection이 끊김
/* const middlewareDisconnect = (req, res, next) => {
  res.send("not happening");
}; */

app.use("/", globalRouter);
// [ userRouter import 하기 ]
// use: /user 에 누군가가 방문하면, userRouter 전체를 활용하겠다는 의미
app.use("/user", userRouter);

app.use("/video", videoRouter);

// [app 오브젝트 export 하기]
// 다른 파일에서 import 요청 시, app 오브젝트 import 허용
export default app;

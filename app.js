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

// default 아닌 오브젝트를 import 하기
import { userRouter } from "./router";

const app = express();

// Request 와 Response 오브젝트 사용: 1)req: 어떤 정보를 가져올 것인가 2)res: 어떤 정보를 노출할 것인가
const handleHome = (req, res) => res.send(`Hello from home`);

// babel 사용 위해 ES6 형식으로 JS 작성
const handleProfile = (req, res) => res.send(`You are on my profile`);

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

// [ route 만들기 ]
// GET 메서드(정보 가져오기)를 통해 메인 URL 접근 시 handleHome 실행
app.get("/", handleHome);
// [ middleware를 메인 페이지에만 추가하기 ]
/* app.get("/", betweenHome, handleHome); */
// [ middleware로 connection 끊기 ]
/* app.get("/", middlewareDisconnect, handleHome); */

app.get("/profile", handleProfile);

// [ userRouter import 하기 ]
// use: /user 에 누군가가 방문하면, userRouter 전체를 활용하겠다는 의미
app.use("/user", userRouter);

// [app 오브젝트 export 하기]
// 다른 파일에서 import 요청 시, app 오브젝트 import 허용
export default app;

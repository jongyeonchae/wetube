// [ express application로 서버 만들기 ]
// require: 내 파일 또는 폴더(node_modules) 내 "express" 이름을 가진 파일을 찾아 불러들임

// babel 사용 위해 ES6 형식으로 JS 작성
import express from "express";

// [ morgan 불러오기 ]
import morgan from "morgan";

// [ helmet 불러오기 ]
import helmet from "helmet";

const app = express();

const PORT = 4000;

// babel 사용 위해 ES6 형식으로 JS 작성
const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

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

// 4000 포트 에서 listen
app.listen(PORT, handleListening);

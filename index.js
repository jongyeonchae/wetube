// [ express application로 서버 만들기 ]
// require: 내 파일 또는 폴더(node_modules) 내 "express" 이름을 가진 파일을 찾아 불러들임
const express = require("express");
const app = express();

const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

// Request 와 Response 오브젝트 사용: 1)req: 어떤 정보를 가져올 것인가 2)res: 어떤 정보를 노출할 것인가
function handleHome(req, res) {
  console.log(req);
  res.send(`Hello from home`);
}

function handleProfile(req, res) {
  res.send(`You are on my profile`);
}

// [ route 만들기 ]
// GET 메서드(정보 가져오기)를 통해 메인 URL 접근 시 handleHome 실행
app.get("/", handleHome);

app.get("/profile", handleProfile);

// 4000 포트 에서 listen
app.listen(PORT, handleListening);

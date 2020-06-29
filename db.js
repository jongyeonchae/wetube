// mongo db 연결
import mongoose from "mongoose";

// [ db 연결 주소 입력하기 ]
// url 작성법: 'mongodb://localhost:포트번호/db명'
// useNewUrlParser, useFindAndModify: Mongoose 가 요청하는 기본 설정
mongoose.connect("mongodb://localhost:27017/we-tube", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = (error) =>
  console.log("❌  Error on DB Connection:${error}");

// db에 연결된 시점(once)에 handleOpen 실행
db.once("open", handleOpen);
db.on("error", handleError);

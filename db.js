// mongo db 연결
import mongoose from "mongoose";
// dotenv 모든 변수 불러오기
import dotenv from "dotenv";

dotenv.config();

// [ db 연결 주소 입력하기 ]
// url 작성법: 'mongodb://localhost:포트번호/db명'
// useNewUrlParser, useFindAndModify: Mongoose 가 요청하는 기본 설정
// 'process.env.KEY값'으로 MONGO_URL 호출
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = (error) =>
  console.log(`❌ Error on DB Connection:${error}`);

// db에 연결된 시점(once)에 handleOpen 실행
db.once("open", handleOpen);
db.on("error", handleError);

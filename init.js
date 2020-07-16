import dotenv from "dotenv";
import "./db";

// [ app.js 에서 app 오브젝트 불러오기 ]
import app from "./app";

dotenv.config();

// [ model 불러오기 ]: db 가 생성한 model(Video)을 자동으로 인지하지 못함
import "./models/Video";
import "./models/Comment";
import "./models/User";

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅  Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);

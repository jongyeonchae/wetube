import "./db";

// [ app.js 에서 app 오브젝트 불러오기 ]
import app from "./app";

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅  Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);

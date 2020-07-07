// multer: 파일 저장 및 저장된 url 제공
import multer from "multer";
import routes from "./routes";

// upload video를 서버("videos/")에 저장
// "/uploads"라고 작성하면 하드디스크에 저장하므로 주의
const multerVideo = multer({ dest: "uploads/videos/" });

// [ res.locals 로 전역(global) 변수 만들기 ]
export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Wetube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};

// single("파일명"): file 1개(파일명)만 upload 됨을 알림
export const uploadVideo = multerVideo.single("videoFile");

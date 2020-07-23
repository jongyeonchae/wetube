// multer: 파일 저장 및 저장된 url 제공
import multer from "multer";
import routes from "./routes";

// upload video를 서버("videos/")에 저장
// "/uploads"라고 작성하면 하드디스크에 저장하므로 주의
const multerVideo = multer({ dest: "uploads/videos/" });

const multerAvatar = multer({ dest: "uploads/avatars/" });

// [ res.locals 로 전역(global) 변수 만들기 ]
export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Wetube";
  res.locals.routes = routes;
  // 로그인 시, passport 가 쿠키, serialize, deserialize를 처리하고, user가 담긴 object를 request 할 것이므로 req.user 로 변경
  res.locals.loggedUser = req.user || null;
  next();
};

// 로그인한 경우, join 페이지로의 진입을 막음
export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

// single("파일명"): file 1개(파일명)만 upload 됨을 알림
export const uploadVideo = multerVideo.single("videoFile");

export const uploadAvatar = multerAvatar.single("avatar");

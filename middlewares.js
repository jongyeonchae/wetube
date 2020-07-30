// multer: 파일 저장 및 저장된 url 제공
import multer from "multer";

// multer 업로드 방식을 s3로 변경
import multerS3 from "multer-s3";
import aws from "aws-sdk";

import routes from "./routes";

// s3 초기화(initialize)
const s3 = new aws.S3({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_PRIVATE_KEY,
  region: "ap-northeast-1",
});

// upload video를 서버("videos/")에 저장
// "/uploads"라고 작성하면 하드디스크에 저장하므로 주의
// multerVideo 의 storage 를 node JS 파일시스템에서 s3로 변경
const multerVideo = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "wetube-cloning/video",
  }),
});

const multerAvatar = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "wetube-cloning/avatar",
  }),
});

// single("파일명"): file 1개(파일명)만 upload 됨을 알림
export const uploadVideo = multerVideo.single("videoFile");

export const uploadAvatar = multerAvatar.single("avatar");

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

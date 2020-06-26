import express from "express";

// ../: 현재 디렉토리(routers 폴더)를 벗어남을 의미
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import {
  getJoin,
  postJoin,
  login,
  logout,
} from "../controllers/userController";

const globalRouter = express.Router();

// [ Controller 파일 적용하기 ]
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;

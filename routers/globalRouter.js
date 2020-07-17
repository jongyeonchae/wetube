import express from "express";

// ../: 현재 디렉토리(routers 폴더)를 벗어남을 의미
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import {
  getJoin,
  postJoin,
  logout,
  getLogin,
  postLogin,
} from "../controllers/userController";
import { onlyPublic } from "../middlewares";

const globalRouter = express.Router();

// [ Controller 파일 적용하기 ]
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

// [ Controller 파일 적용하기 ]
globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPublic, logout);

export default globalRouter;

import express from "express";
import passport from "passport";

// ../: 현재 디렉토리(routers 폴더)를 벗어남을 의미
import routes from "../routes";

import { home, search } from "../controllers/videoController";
import {
  getJoin,
  postJoin,
  logout,
  getLogin,
  postLogin,
  githubLogin,
  postGithubLogin,
  getMe,
  facebookLogin,
  postFacebookLogin,
} from "../controllers/userController";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

// [ Controller 파일 적용하기 ]
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

// [ Controller 파일 적용하기 ]
globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.gitHub, githubLogin);

globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogin
);

globalRouter.get(routes.me, getMe);

globalRouter.get(routes.facebook, facebookLogin);
globalRouter.get(
  routes.facebookCallback,
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  postFacebookLogin
);

export default globalRouter;

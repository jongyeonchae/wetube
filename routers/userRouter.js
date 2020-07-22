import express from "express";
import routes from "../routes";
import {
  userDetail,
  getEditProfile,
  changePassword,
} from "../controllers/userController";
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();

// editProfile 호출 시 userDetail의 id로 인식하는 문제 해결위해, 위치 변경
userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
// changePassword 호출 시 userDetail의 id로 인식하는 문제 해결위해, 위치 변경
userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;

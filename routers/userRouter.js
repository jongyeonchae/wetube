import express from "express";
import routes from "../routes";
import {
  userDetail,
  getEditProfile,
  getChangePassword,
  postEditProfile,
  postChangePassword,
} from "../controllers/userController";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

// editProfile 호출 시 userDetail의 id로 인식하는 문제 해결위해, 위치 변경
userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);

userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

// changePassword 호출 시 userDetail의 id로 인식하는 문제 해결위해, 위치 변경
userRouter.get(routes.changePassword, onlyPrivate, getChangePassword);
userRouter.post(routes.changePassword, onlyPrivate, postChangePassword);

userRouter.get(routes.userDetail(), userDetail);

export default userRouter;

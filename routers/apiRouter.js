import express from "express";
import routes from "../routes";
import {
  postRegisterView,
  postAddComment,
} from "../controllers/videoController";

const apiRouter = express.Router();

// editProfile 호출 시 userDetail의 id로 인식하는 문제 해결위해, 위치 변경
apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addComment, postAddComment);
export default apiRouter;

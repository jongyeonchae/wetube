import express from "express";
import routes from "../routes";
import { registerView } from "../controllers/videoController";

const apiRouter = express.Router();

// editProfile 호출 시 userDetail의 id로 인식하는 문제 해결위해, 위치 변경
apiRouter.post(routes.registerView, registerView);

export default apiRouter;

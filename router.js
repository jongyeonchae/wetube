import express from "express";

// [ Router 만들기 ]
// export 를 통해 다른 파일에서 활용할 수 있도록 허용
export const userRouter = express.Router();

// 내부에 함수 쓰는 법 참고
userRouter.get("/", (req, res) => res.send(`user index`));
userRouter.get("/edit", (req, res) => res.send(`user edit`));
userRouter.get("/password", (req, res) => res.send(`user password`));

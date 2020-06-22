import express from "express";

// ../: 현재 디렉토리(routers 폴더)를 벗어남을 의미
//import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => res.send("Home"));
globalRouter.get(routes.search, (req, res) => res.send("Search"));
globalRouter.get(routes.join, (req, res) => res.send("Join"));
globalRouter.get(routes.login, (req, res) => res.send("Login"));
globalRouter.get(routes.logout, (req, res) => res.send("Logout"));

export default globalRouter;

import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

// 로그인 이후 화면을 위해, postJoin 함수를 새로 생성
// register 이후 login 으로 바로 연결하기 위해, postJoin 을 middleware 로 변경
export const postJoin = async (req, res, next) => {
  // 사용자가 입력한 키값(name, email 등)을 확인하고, 비밀번호가 일치 여부에 따라 다른 반응(res)
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    // status code(400: Bad Request)로 브라우저에게 비밀번호 일치여부 확인
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    // To Do: Register User
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
    // To Do: Log User In
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Log in" });

// register 이후 postLogin 실행 시, register에서 입력한 email, pw 정보가 postLogin 으로 전달됨 (middleware의 정보는 다음 함수에 전달됨)
export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});

export const logout = (req, res) => {
  // To Do: Process Log Out
  res.redirect(routes.home);
};

export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Details" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });

import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

// 로그인 이후 화면을 위해, postJoin 함수를 새로 생성
export const postJoin = (req, res) => {
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
    // To Do: Log User In
    res.redirect(routes.home);
  }
};

export const login = (req, res) => res.render("login", { pageTitle: "Log in" });
export const logout = (req, res) =>
  res.render("logout", { pageTitle: "Log out" });
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Details" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });

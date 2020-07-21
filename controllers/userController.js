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

export const githubLogin = passport.authenticate("github");

// github에서 사용자 정보를 가져왔을 때, 실행되는 함수
export const githubLoginCallback = async (_, __, profile, cb) => {
  // 로그인 인증을 위해, profile 내 json 정보(id, avatar_url, name, email)를 확인
  const {
    _json: { id, avatar_url: avatarUrl, name, email },
  } = profile;
  try {
    const user = await User.findOne({ email });
    // email이 같은 user를 찾았다면, 해당 user의 githubId 를 id로 업데이트
    if (user) {
      user.githubId = id;
      user.avatarUrl = avatarUrl;
      user.name = name;
      user.save();
      return cb(null, user);
      // email 이 같은 user를 못찾았다면, 새로운 user 생성
    }
    const newUser = await User.create({
      email,
      name,
      githubId: id,
      avatarUrl,
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

export const postGithubLogin = (req, res) => {
  res.redirect(routes.home);
};

export const facebookLogin = passport.authenticate("facebook");

export const facebookLoginCallback = async (_, __, profile, cb) => {
  const {
    _json: { id, name, email },
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.facebookId = id;
      user.avatarUrl = `https://graph.facebook.com/${id}/picture?type=large`;
      user.name = name;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      email,
      name,
      facebookId: id,
      // facebook 이 제공한 URL 은 임시이므로, 아래와 같이 avatarUrl 을 변경
      avatarUrl: `https://graph.facebook.com/${id}/picture?type=large`,
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

export const postFacebookLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  // To Do: Process Log Out
  req.logout();
  res.redirect(routes.home);
};

// req.user 는 로그인된 user 를 지칭
export const getMe = (req, res) => {
  res.render("userDetail", { pageTitle: "User Details", user: req.user });
};

export const userDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const user = await User.findById(id);
    res.render("userDetail", { pageTitle: "User Details", user });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });

// global URL
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// users URL
const USERS = "/users";
//:표기는 expressJS에게 변할 수 있음을 얄림
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// videos URL
const VIDEOS = "/videos";
const VIDEO_DETAIL = "/:id";
const UPLOAD = "/upload";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

// routes 오브젝트 생성
const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: VIDEO_DETAIL,
  editVideo: EDIT_VIDEO,
  deleteVideo: DELETE_VIDEO,
};

export default routes;

// [ pug 적용하기: .render("pug 파일명") ]
// render 함수의 두번째 인자: 템플릿에 추가할 정보가 담긴 객체. { pageTitle: "Home" }을 삽입하여 특정 템플릿에만 변수 적용
export const home = (req, res) => res.render("home", { pageTitle: "Home" });

export const search = (req, res) =>
  res.render("search", { pageTitle: "Search" });

export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });

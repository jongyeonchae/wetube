import { videos } from "../db";

// [ pug 적용하기: .render("pug 파일명") ]
// render 함수의 두번째 인자: 템플릿에 추가할 정보가 담긴 객체. { pageTitle: "Home" }을 삽입하여 특정 템플릿에만 변수 적용
// [ fake data 불러오기 ]
export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};
// [ 사용자가 입력한 정보(query) 가져오기 ]
export const search = (req, res) => {
  // const searchingBy = req.query.term;
  // ES6 이전 코딩방식으로, 아래 코드와 동일
  const {
    query: { term: searchingBy },
  } = req;
  // [ searchingBy 값 전달 ]
  // ES6 코딩 방식으로 인해, searchingBy: searchingBy 코드는 searchingBy 와 동일
  res.render("search", { pageTitle: "Search", searchingBy });
};

export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });

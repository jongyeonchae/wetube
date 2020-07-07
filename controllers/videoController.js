import routes from "../routes";
import Video from "../models/Video";

// [ pug 적용하기: .render("pug 파일명") ]
// render 함수의 두번째 인자: 템플릿에 추가할 정보가 담긴 객체. { pageTitle: "Home" }을 삽입하여 특정 템플릿에만 변수 적용
// [ fake data 불러오기 ]
// [ async 를 활용하여 video define 하기 ]
// * async 함수: 함수 내 코드가 모두 수행될 때까지 아래 코드를 수행하지 않고 기다림(await)
// * try, catch 를 통해 error 를 handle
export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
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
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

// multer를 통해 upload 한 비디오 path 확인 후, 새로운 비디오로 등록
export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });
  console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });

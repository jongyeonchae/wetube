// [ pug 적용하기 ]
// { pageTitle: "Home" }을 삽입하여 특정 템플릿에만 변수 적용
export const home = (req, res) => res.render("Home", { pageTitle: "Home" });

export const search = (req, res) =>
  res.render("Search", { pageTitle: "Search" });

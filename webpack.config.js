// server code가 아닌 client code 이므로, babel-node가 적용되지 않음. 직접 old JS 형식으로 작성해야함

// path: Node.js에 내장된 패키지로, 파일 또는 디렉토리를 absolute 하게 설정
// path.resolve(디렉토리명, entry 파일경로): 파일 접근 경로에 설정
// path.join(디렉토리명, export 폴더명): 디렉토리에 설정
// dirname: 프로젝트 디렉토리 이름으로, 어디서든 접근가능한 Node.js 전역 변수
const path = require("path");
const autoprefixer = require("autoprefixer");
const ExtractCSS = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  entry: ENTRY_FILE,
  mode: MODE,
  module: {
    rules: [
      {
        // /\.(scss)$/: 정규표현식으로 scss 파일 찾기
        test: /\.(scss)$/,
        // config 파일에서 webpack은 아래에서 위로 실행하므로, extract CSS - teach CSS - teach CSS(compatibility) - teach CSS(SCSS > CSS) 순으로 작성
        use: ExtractCSS.extract([
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              plugin() {
                return [autoprefixer({ browers: "cover 99.5%" })];
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ]),
      },
    ],
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js",
  },
  // [ ExtractCSS 설치 ]
  plugins: [new ExtractCSS("styles.css")],
};

module.exports = config;

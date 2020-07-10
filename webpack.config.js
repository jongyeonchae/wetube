// server code가 아닌 client code 이므로, babel-node가 적용되지 않음. 직접 old JS 형식으로 작성해야함

// path: 파일 또는 디렉토리를 absolute 하게 설정
// path.resolve(디렉토리명, 경로순서): 파일 접근 경로에 설정
// path.join(디렉토리명, export 폴더명): 디렉토리에 설정
const path = require("path");

const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  entry: ENTRY_FILE,
  output: {
    path: OUTPUT_DIR,
    filename: "[name].[format]",
  },
};

module.exports = config;

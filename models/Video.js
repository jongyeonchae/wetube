// [ mongo db에 저장할 데이터 형태 설정하기 ]
// model: 데이터
// schema: 데이터의 형태

import mongoose from "mongoose";

// [ schema 설정 ]
const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required",
  },
  title: {
    type: String,
    required: "Title is required",
  },
  description: String,
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    // Date.now 함수를 실행하여 날짜 조회
    default: Date.now,
  },
  // [ data relationship 설정 - 2 ]
  // video에 연결시킬 comment 목록 불러오기
  // type: 연결시킬 매개체(id) 설정
  // ref: 연결시킬 comment model명 입력
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

// [ model 생성 ]
const model = mongoose.model("Video", VideoSchema);
export default model;

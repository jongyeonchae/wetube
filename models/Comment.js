import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // [ data relationship 설정 - 1 ]
  // comment에 연결시킬 video를 직접 언급
  // type: 연결시킬 매개체(id) 설정
  // ref: 연결시킬 video model명 입력
  video: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video",
  },
});

const model = mongoose.model("Comment", CommentSchema);
export default model;

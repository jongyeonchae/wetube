import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  facebookId: Number,
  githubId: Number,
});

// configuration 객체의 설정을 통해, 사용자가 입력한 email을 username 으로 인식
UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.Model("User", UserSchema);

export default model;
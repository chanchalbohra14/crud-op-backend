import mongoose from "mongoose";
const MemberSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
    trim: true,
  },
  Age: {
    type: Number,
  },
  Gender: {
    type: String,
    enum: ["female", "male", "others"],
  },
  Course: {
    type: String,
    enum: ["bca", "bba", "bcom"],
  },
  Contact: {
    type: Number,
  },
  Address: {
    type: String,
  },
});
const Member = mongoose.model("member", MemberSchema);
export default Member;

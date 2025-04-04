import mongoose from "mongoose";
const MemberSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      trim: true,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },

    phone: {
      type: Number,
    },
    email: {
      type: String,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid Email",
      ],
    },

    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
  },

  {
    timestamps: true,
    minimize: false,
  }
);
const Member = mongoose.model("member", MemberSchema);
export default Member;

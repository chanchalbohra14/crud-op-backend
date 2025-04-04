import express from "express";
import {
  addmember,
  getAllMember,
  getMember,
} from "../Controllers/MemberController.js";
const router = express.Router();
router.post("/addmember", addmember);
router.get("/getAllMember", getAllMember);
router.get("/getMember/:id", getMember);
//routes

export default router;

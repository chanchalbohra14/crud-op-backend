import express from "express";
import {
  CreateMember,
  deleteMember,
  getMember,
  getMembers,
  updateMember,
} from "../Controllers/MemberController.js";
const router = express.Router();
router.post("/createmember", CreateMember);
router.get("/getmembers", getMembers);
router.get("/getmember/:id", getMember);
router.patch("/updatemember/:id", updateMember);
router.delete("/deletemember/:id", deleteMember);
export default router;

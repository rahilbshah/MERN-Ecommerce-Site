import express from "express";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import {
  deleteUser,
  getAllUser,
  getUser,
  getUserStats,
  updateUser,
} from "../controllers/userController.js";
import User from "../models/userModel.js";

const router = express.Router();

router.put("/:id", verifyUser, updateUser);

router.delete("/:id", verifyUser, deleteUser);

router.get("/find/:id", verifyUser, getUser);

router.get("/", verifyAdmin, getAllUser);

router.get("/stats", verifyAdmin, getUserStats);

export default router;

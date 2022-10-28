import express from "express";
import { createOrder, deleteOrder, getAllUsersOrder, getMonthlyIncome, getUserOrder, updateOrder } from "../controllers/orderController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken,createOrder);

router.put("/:id", verifyAdmin,updateOrder);

router.delete("/:id", verifyAdmin,deleteOrder);

router.get("/find/:userId", verifyUser,getUserOrder);

router.get("/", verifyAdmin,getAllUsersOrder);

router.get("/income", verifyAdmin,getMonthlyIncome);

export default router;

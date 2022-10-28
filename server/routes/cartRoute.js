import express from "express";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
import { createCart, deleteCart, getAllCarts, getCart, updateCart } from "../controllers/cartController.js";

const router = express.Router();

router.post("/", verifyToken,createCart);

router.put("/:id", verifyUser,updateCart);

router.delete("/:id", verifyUser,deleteCart);

router.get("/find/:userId", verifyUser,getCart);

router.get("/", verifyAdmin,getAllCarts);

export default router;

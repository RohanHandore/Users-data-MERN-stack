import express from "express";
import { addUser, deleteUser, getAllUsers, updateUser } from "../controller/user-controller.js";

const router = express.Router();
router.get("/", getAllUsers);
router.post("/", addUser);
router.delete("/", deleteUser);
router.put("/", updateUser);

export default router;
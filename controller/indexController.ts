import express from "express";
import user from  "./userController"

const router = express.Router();
router.use("/", user)

export default router;
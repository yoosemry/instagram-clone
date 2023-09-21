import express from "express";
import { createUser } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post('/user-register', createUser);

export default userRouter;
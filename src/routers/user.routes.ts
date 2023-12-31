import { Router } from "express";
import UserController from "../controller/UserController";

const userController = new UserController();
const userRouter = Router();

userRouter.post('/', userController.create);
userRouter.get('/', userController.getAll);

export { userRouter };
import CarController from "../controller/CarController";
import { Router } from "express";

const carRouter = Router();
const carController = new CarController();

carRouter.post('/', carController.create);

export { carRouter };
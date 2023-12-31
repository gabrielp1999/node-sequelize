import Car from "../model/CarModel";
import { Request, Response } from "express";

class CarController {
    async create(req: Request, res: Response){
        try {
            const { model, brand, UserId } = req.body;
            if(!model || !brand || !UserId){
                return res.status(400).send({ message: 'invalid information' });
            }
            console.log(req.body)
            const car = await Car.create({
                model,
                brand,
                UserId
            })
    
            return res.status(201).send(car);
        } catch (err) {
            console.error(err);
            return res.status(500).send({ message: err });
        }
    }

    async deleteById(req: Request, res: Response){
        try {
            const { id } = req.params;
            await Car.destroy({ where: { id } });
            return res.send({ message: "successfully deleted" });
        } catch (err) {
            console.error(err);
            return res.status(500).send({ message: err });
        }
    }
    
}

export default CarController;
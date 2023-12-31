import User from "../model/UserModel";
import { Request, Response } from "express";


class UserController{
    async create(req: Request, res: Response){
        try {
            const { name, email, age } = req.body;
            console.log(req.body)
    
            if(!name || !email){
                return res.status(400).send({ message: 'name and email are required' });
            }
    
            const newUser = await User.create({
                name,
                email,
                age
            })
            return res.status(201).send({message: 'success', user: newUser});
        } catch (err) {
            console.error(err);
            return res.status(500).send({ message: err });
        }


    }
}

export default UserController;
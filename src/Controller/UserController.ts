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
            return res.status(201).send({ user: newUser});
        } catch (err) {
            console.error(err);
            return res.status(500).send({ message: err });
        }
    }

    async getAll(req: Request, res: Response){
        try {
            const users = await User.findAll({ raw: true });
            return res.send({ users })
        } catch (err) {
            console.error(err);
            return res.status(500).send({ message: err });
        }
    }

    async getById(req: Request, res: Response){
        try {
            const { id } = req.params;
            const user = await User.findOne({ where: { id } });
            return res.send({ user });
        } catch (err) {
            console.error(err);
            return res.status(500).send({ message: err });
        }
    }

    async deleteById(req: Request, res: Response){
        try {
            const { id } = req.params;
            await User.destroy({ where: { id } });
            return res.send({ message: "successfully deleted" });
        } catch (err) {
            console.error(err);
            return res.status(500).send({ message: err });
        }
    }

    async update(req: Request, res: Response){
        try {
            const { id } = req.params;
            const { name, email, age } = req.body;
            console.log(req.body)
    
            if(!name || !email){
                return res.status(400).send({ message: 'name and email are required' });
            }

            const user = {
                name,
                email,
                age
            }
            await User.update(user, { where: { id }});
            return res.send({ user });          
        } catch (err) {
            console.error(err);
            return res.status(500).send({ message: err });
        }
    }


}

export default UserController;
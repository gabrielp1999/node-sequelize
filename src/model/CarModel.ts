import { DataTypes } from "sequelize";
import { sequelize } from "../db/conn";

import User from "./UserModel";

const Car = sequelize.define('Car', {
    model: { 
        type: DataTypes.STRING,
        allowNull: false
    },
    brand: { 
        type: DataTypes.STRING,
        allowNull: false
    }
})

User.hasMany(Car);
Car.belongsTo(User);

export default Car;
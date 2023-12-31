import { DataTypes } from "sequelize";
import { sequelize } from "../db/conn";

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    age: {
        type: DataTypes.STRING
    },
    
})

export default User;
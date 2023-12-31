import { Sequelize } from "sequelize";

const sequelize = new Sequelize('nodesequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export { sequelize };
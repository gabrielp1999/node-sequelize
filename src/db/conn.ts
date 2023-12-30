import { Sequelize } from "sequelize";

const sequelize = new Sequelize('nodesequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

const startDb = () => {
    try {
        sequelize.authenticate();
        console.log("connected to the database");
    } catch (err) {
        console.error(err);
    }
}

export { startDb };
import express from "express"
import cors from "cors";
import { sequelize } from "./db/conn";
import { userRouter } from "./routers/user.routes";
import { carRouter } from "./routers/car.routes";

const app = express();
app.use(express.json());
app.use(cors())
const PORT = 3001;

app.use('/user', userRouter);
app.use("/car", carRouter);

app.get('/', (req, res) => {
    return res.status(200).send({ message: 'Welcome to the API' });
})

sequelize
//.sync({ force: true}) 
//o force, ele força o app a criar tabelas novas, deletando as antigas
.sync()
.then(() => {
    console.log("connected to the database");
    app.listen(PORT, () => {
        console.log(`app running on the port: ${PORT}`)
    })
})
.catch((err) => {
    console.error('could not connect to the database:', err);
})

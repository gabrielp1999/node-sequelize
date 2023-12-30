import express from "express"
import { startDb } from "./db/conn";

const app = express();
const PORT = 3001;

app.use(express.json);

app.listen(PORT, () => {
    startDb();
    console.log(`app running on the port: ${PORT}`)
})
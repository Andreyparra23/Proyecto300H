import express from "express";
import dotenv from "dotenv";
import { connectionMongo } from "./src/config/dataBase.js";
import { productRouter } from "./src/routes/product.routes.js";


const app = express();
dotenv.config();
connectionMongo ();

app.use(express.json);
app.use('/productos', productRouter);
 


const port = process.env.PORT;

app.listen (port, ()=> {
    console.log("se esta ejecutando el puerto " + port)
});  
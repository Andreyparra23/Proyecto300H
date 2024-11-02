import express from "express";
import dotenv from "dotenv";
import { connectionMongo } from "./src/config/dataBase.js";

const app = express();
dotenv.config();
connectionMongo ();


// falta linea de codigo mongo

const port = process.env. PORT;

app.listen (port, ()=> {
    console.log("se esta ejecutando el puerto 3000")
});
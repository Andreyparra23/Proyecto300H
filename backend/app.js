import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

// falta linea de codigo mongo

const port = process.env. PORT;

app.listen (port, ()=> {
    console.log("se esta ejecutando el puerto 3000")
});
import { getProduct, postProduct, deleteProductById, putProductById } from "../controllers/product.controller.js";
import express from "express";

export const productRouter = express.Router();

//RUTA GET
productRouter.get('/obtener', getProduct);

//RUTA POST
productRouter.post('/crear', postProduct);

//RUTA PUT
productRouter.put('/actualizar/:ID', putProductById);

//RUTA DELETE
productRouter.delete('/eliminar/:ID',deleteProductById);
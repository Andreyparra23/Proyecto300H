import mongoose from "mongoose";

const productScheme = new mongoose.Schema({
    Image: {type: String, required: true}, //image es el nombre que nosotros le ponemos a esa "variable", caracteristicas de la info que quieren guardar
    name: {type: String, required: true},
    category: {type: String, required: false},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    isAvalaible: {type: Boolean}, 
    });

    export const productModel = mongoose.model('product', productScheme);
    
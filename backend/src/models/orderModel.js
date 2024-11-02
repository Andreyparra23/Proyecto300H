    //coleccion para ordenes
    import mongoose, { mongo } from "mongoose";

    const orderScheme = new mongoose.Schema({

        product: {type: String, required: true},//id del producto
        user: {type: String, required: true},//id usuario
        orderDate:{type: Date, required: true},//fecha de la orden
        orderTotal: {type: Number, required: true}

    })

    export const orderModel = mongoose.model("order", orderScheme);//link de exportacion
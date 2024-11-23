import { userModel } from "../models/users.model.js";
import bcrypt from "bcryptjs";


export const createUser = async(req, res)=>{

    try {
        const {fullName, email, password, role} = req.body
        const codedPassword = await bcrypt.hash(password, 10);
        const newUser = await userModel.create({
            fullName,
            email,
            password:codedPassword,
            role
        });

        return res.status(201).json({
            mensaje: "Usuario creado correctamente",
            datos: newUser
        })


    } catch (error) {
        return res.status(400).json({
            mensaje:"Ocurrio un error al crear un usuario",
            problema:error  error.message

        });
    }

}

export const showUsers = async(req, res) =>{

     try {
        let users = await userModel.find();

        if(users.length === 0){
            return res.status(200).json({
                mensaje:"No hay usuarios almacenados"
            })

        }

        return res.status(200).json({
            mensaje:"Se encontraron usuarios almacenados"
        })


     } catch (error) {
        try {

        } catch (error) {
            return res.status(400).json({
                mensaje:"Ocurrio un error al mostrar los usuarios",
                problema:error  error.message

            });
        }

     }

}
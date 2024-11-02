import mongoose, { mongo } from "mongoose";


const userSchema = new mongoose.Schema({
    fullname: {typer:String, required:true},
    email:{typer:String, required:true, unique:true},
    password:{typer:String, required:true},
    role:{typer:String, default:'cliente'}
});


export const userModel = mongoose.model('user', userSchema);
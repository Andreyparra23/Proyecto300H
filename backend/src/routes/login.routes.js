import { createUser, showUsers } from "../controllers/user.controller.js";
import express from 'express';
import auth from "../middleware/auth.js";

const usersRouter = express.Router();
usersRouter.post('/crear', createUser);
usersRouter.get('/obtener',auth('admin'), showUsers);
import { json } from "body-parser";
import express, { Request, Response, Router } from "express";
import Todo from "../models/todo";
import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";
import dotenv from "dotenv";
import User from "../models/user";
import jwt from "jsonwebtoken";

dotenv.config();

class AuthController {
  static register = async (req: Request, res: Response): Promise<any> => {

    const { name, email, password } = req.body;

    const passwordCrypt = CryptoJS.AES.encrypt(
      password,
      process.env.SECRET as string
    ).toString();
    
    const user = new User({
      name,
      email,
      password: passwordCrypt,
    });

    try {
      await user.save();
      return res
        .status(201)
        .send({ message: "Usuário cadastrado com sucesso" });
    } catch (error) {
      return res.status(500).send({ message: "Something failed" + error });
    }
  };

  static login = async (req: Request, res: Response): Promise<any> => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user)
      return res.status(400).send({ message: "Invalid Email or password" });

    var bytes = CryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET as string
    );
    const passwordDecrypted = bytes.toString(CryptoJS.enc.Utf8);
    if (password !== passwordDecrypted)
      return res.status(400).send({ message: "InvalidEmailorpassword" });

    const secret = process.env.SECRET;
    if (secret) {
      const token = jwt.sign(
        {
          id: user._id,
        },
        secret,
        {
          expiresIn: "2days",
        }
      );
      return res.status(200).send({ token: token });
    }
  };
}

export default AuthController;

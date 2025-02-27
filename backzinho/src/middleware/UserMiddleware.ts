import { Request, Response, NextFunction } from "express";

class userMiddleware {
  static ValidateRegister = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { name, email, password } = req.body;

    if (!email || !password || !name) {
       res.status(400).json({ error: "Preencha todos os campos"})
    }

    next();
  };

  static ValidateLogin = (
    req: Request, 
    res: Response, 
    next: NextFunction
  ) => {
    const { email, password } = req.body;

    if (!email || !password) {
       res.status(400).json({ error: "E-mail e senha são obrigatórios" });
    }

    next();
  };
}

export default userMiddleware;

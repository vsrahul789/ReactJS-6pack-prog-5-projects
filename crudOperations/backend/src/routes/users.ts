import express, { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import User from "../models/User";

const router = express.Router();

router.post(
  "/register",
  [
    check("name", "Name is required").isString(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Please include a valid password").isLength({ min: 6 }),
  ],
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return next();
      }
      user = new User(req.body);
      await user.save();
      const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET_KEY as string, //! In .env file
        { expiresIn: "1w" }
      );

      res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_SECRET_KEY === "PRODUCTION",
        maxAge: 1000 * 60 * 60 * 24 * 7,
      });
      res.status(200).json({ message: "User created successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "something went worng" });
    }
  }
);

export default router;

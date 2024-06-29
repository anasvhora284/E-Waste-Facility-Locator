/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user.js");
require("dotenv").config();

const register = async (req, res, next) => {
     const { name, phone, username, email, password, role } = req.body;

     try {
          const hashedPassword = await bcrypt.hash(password, 10);
          const newUser = new User({
               name,
               phone,
               username,
               email,
               password: hashedPassword,
               role: role || "user",
          });
          await newUser.save();
          res.json({ message: "Registration successful" });
     } catch (error) {
          next(error);
     }
};

const login = async (req, res, next) => {
     const { username, password } = req.body;

     try {
          const user = await User.findOne({ username });
          if (!user) {
               return res.status(404).json({ message: "User not found" });
          }

          const passwordMatch = await user.comparePassword(password);
          if (passwordMatch) {
               return res
                    .status(401)
                    .json({ message: "Incorrect Email or password" });
          }

          const token = jwt.sign(
               { userId: user._id, role: user.role },
               process.env.SECRET_KEY,
               {
                    expiresIn: "30d",
               }
          );
          res.json({ token, role: user.role });
     } catch (error) {
          next(error);
     }
};

const validateToken = async (req, res) => {
     const { token } = req.body;

     if (!token) {
          return res.status(400).json({ message: "Token not provided" });
     }

     try {
          const decoded = jwt.verify(token, process.env.SECRET_KEY);
          res.status(200).json({ isValid: true });
     } catch (error) {
          res.status(401).json({ isValid: false });
     }
};

module.exports = { register, login, validateToken };

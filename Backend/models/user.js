/* eslint-disable no-undef */
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
     {
          name: { type: String, required: true },
          phone: { type: String, required: true },
          username: { type: String, required: true },
          email: { type: String, required: true, unique: true },
          password: { type: String, required: true },
          role: {
               type: String,
               enum: ["user", "admin"],
               default: "user",
          },
     },
     { timestamps: true }
);

userSchema.pre("save", async function (next) {
     const user = this;
     if (!user.isModified("password")) return next();

     try {
          const salt = await bcrypt.genSalt();
          user.password = await bcrypt.hash(user.password, salt);
          next();
     } catch (error) {
          return next(error);
     }
});

userSchema.methods.comparePassword = async function (password) {
     return bcrypt.compare(password, this.password);
};

const User = mongoose.model("Users", userSchema);

module.exports = User;

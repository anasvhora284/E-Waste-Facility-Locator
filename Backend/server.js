/* eslint-disable no-undef */
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const cors = require("cors");

const app = express();
app.use(
     cors({
          origin: "http://localhost:5173",
          methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
          credentials: true,
     })
);
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI + "/E-Waste-Facility-Locator", {
     useNewUrlParser: true,
     useUnifiedTopology: true,
});
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

mongoose.connection.on("connected", () => {
     console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
     console.error("Error connecting to MongoDB:", err);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
});

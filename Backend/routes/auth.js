/* eslint-disable no-undef */
// routes/auth.js
const express = require("express");
const { register, login, validateToken } = require("../controllers/auth");

const router = express.Router();

router.post("/signup", register);
router.post("/login", login);
router.post("/validate-token", validateToken);

module.exports = router;

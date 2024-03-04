const express = require("express");
const {
  login,
  register,
  signout,
  testEncryption,
} = require("../controllers/authController");

const router = express.Router();

router.post("/login", login);
router.post("/signup", register);
router.post("/signout", signout);
router.post("/encryption", testEncryption);

module.exports = router;

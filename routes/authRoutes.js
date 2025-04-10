const express = require("express");
const router = express.Router();
const authController = require('../controllers/authControllers');
const verifyToken = require("../middlewares/verifyToken");

router.post('/register', authController.registerPost);
router.post('/login', verifyToken, authController.loginPost);
router.post('/logout', authController.logoutPost);

module.exports = router;


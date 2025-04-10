const express = require("express");
const router = express.Router();
const authController = require('../controllers/authControllers');

router.post('/register', authController.registerPost);
router.post('/login', authController.loginPost);
router.post('/logout', authController.logoutPost);

module.exports = router;


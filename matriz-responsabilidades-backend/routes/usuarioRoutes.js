const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const { authenticate} = require('../middleware/authMiddleware');
// Registro de usuario administrador
router.post('/register', authenticate , usuarioController.register);
// Login de usuario
router.post('/login', authenticate , usuarioController.login);
module.exports = router;
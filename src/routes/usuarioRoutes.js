const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController.js');

const router = Router();

router.get('/usuarios', UsuarioController.get);
router.post('/usuarios', UsuarioController.register);

module.exports = router;
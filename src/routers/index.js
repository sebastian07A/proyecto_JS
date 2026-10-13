const { Router} = require ('express');
const usuarioRouters = require ('./usuarioRouters.js')
const productosRoutes = require ('./productosRousters.js')
const authRouters = require ('./authRouters.js')

const router = Routers();

router.use ('/listar', usuarioRouters);
router.use ('/listar', productosRoutes);
router.use ('/auth', authRouters); //Quedara accesinle en /api/auth/reg

module.exports = router;
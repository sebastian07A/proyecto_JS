const { Router } = require("express")

const {listarProductos, listarUnProducto, crearProducto, 
    eliminarProducto} =require ('.../controllers/productosControllers');

const router = Router();

//Ruta final comlementaria para formar /api/productos/listado
router.get ('/listado', listarProductos);
router.get ('/listadoUno', listarUnProducto);
router.get ('/crear', crearProducto);
router.get ('/eliminar', eliminarProducto);

module.exports = router; 

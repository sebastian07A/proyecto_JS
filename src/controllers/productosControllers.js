














const {listar} = require ('./models/productosModel.js')


const listarProductos = async (req, res)=>{
    try{
        //obtener lisado de productos,
        //  utilizando el servicio
        const productos = await listar()
        res.status(200).json(productos)
    } catch (error) {
        res.status(500).json({Error: error.mensaje})
    }

}

const listarUnProductos = (req, res)=>{
    res.json({mensaje: "Ruta de listar unproducto"})
}

const crearProducto = (req, res)=>{
    res.json({mensaje: "Ruta de crear un producto"})
}

const eliminarProducto = (req, res)=>{
    res.json({mensaje: "RUta de eliminar un producto"})
}


module.exports = {listarProductos, listarUnProductos, crearProducto, eliminarProducto}
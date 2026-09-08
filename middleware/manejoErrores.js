const manejoErrores = (err, req, res, next)=>{
    const codigoEstado = err.statusCode || 500
    const mensaje = err.mensaje || "Error inesperado."
    const fecha = new Date().toDateString()
    console.log(['Fecha', fecha - 'Estado:', codigoEstado - 'Mensaje', mensaje])
    //otra parte de mensaje de error
    if (err.stack){
        console.error(err.stack)
    }
        
        //respuesta del servidor 
        res.status(codigoEstado).json({
            Estado: "Error",
            CodigoEstado: codigoEstado,
             mensaje: mensaje,
            //mas detalles cuando somos desarrolladores
            ...(process.env.NODE_ENV ==='desarrollador' && {stack: err.status})    
        })
        }
module.exports = manejoErrores
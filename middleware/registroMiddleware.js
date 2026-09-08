const reguistroMiddleware =(req, res, next)=>{
    const tiempoMilisegundo = Date.now()
    const tiempoUTC = new Date().toISOString
    //console.log(`Milisegundo: ${ tiempoMilisegundo}`)
    //    UTC: {tiempoUTC
    //mostrar informacion de la solicitud entrante 
    console.log(`[${tiempoUTC}: ${req.method} - ${req.url} - ${req.ip}`)

    //Escuchamos el event 'finish' para saber cuando termina la repuesta
    res.on('finish', () => {
        const duracion = Date.now() -tiempoMilisegundo;
        console.log(tiempoUTC, 'response', res.satatusCode, duracion + 'ms')
    });
            next()
        }

module.exports= reguistroMiddleware
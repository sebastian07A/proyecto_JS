const { error } = require("console")
const express = require("express")
const app = express()
//configuracion de body-parse
app.use(express.json())
const sistemaArchivo = require("fs")
const ruta = require("path")

const PORT = process.env.PORT || 3000;

//ruta de mi archivo json
const rutaArchivojson = ruta.join(__dirname, "aprendices.json")

app.get("/", (req, res) => {
    res.send(`<h1>Api aprendices</h1>`)
})

//Lista para crear endpoint
app.get("/api/aprendices", (req, res) => {
    sistemaArchivo.readFile(rutaArchivojson, "utf-8", (error, datos) => {
        if (error) {
            return res.status(500).json({ Error: "Error conexion bd." })
        }
        const listaAprendices = JSON.parse(datos)
        res.json(listaAprendices)
    })
})

//endpoint para adicionar
app.post("/api/aprendices", (req, res) => {
    //capturar los datos enviados
    const datosAprendiz = req.body
    sistemaArchivo.readFile(rutaArchivojson, "utf-8", (error, datos) => {
        if (error) {
            return res.status(500).json({ Error: "Error conexion bd." })
        }
        const listaAprendices = JSON.parse(datos)
        //agregar a la lista de javascript
        listaAprendices.push(datosAprendiz)
        //escritura de archivo
        sistemaArchivo.writeFile(rutaArchivojson, JSON.stringify
            (listaAprendices, null, 2
            ), (error) => {
                if (error) {
                    return res.json({ Error: "No se puede reguitrar." })
                }
                res.status(201).json(datosAprendiz)
            })
    })
})

//endpoint para modificar aprendices
app.put("/api/aprendices/:di", (req, res) => {
    const diAprendiz = req.params.di
    const datosAprendiz = req.body
    sistemaArchivo.readFile(rutaArchivojson, "utf-8", (error, datos) => {
        if (error) {
            return res.status(500).json({ Error: "Error de conexion" })
        }
        let listaAprendices = JSON.parse(datos)
        // actualizar aprendi
        listaAprendices = listaAprendices.map(aprendiz => {
            return aprendiz.di === diAprendiz ? { ...aprendiz, ...datosAprendiz } :
                aprendiz
        })
        //escritura de archivo
        sistemaArchivo.writeFile(rutaArchivojson, JSON.stringify
            (listaAprendices, null, 2), (error) => {
                if (error) {
                    return res.json({ Error: "No se puede editar." })
                }
                res.status(200).json(datosAprendiz)
            })

    })
})

//endpoint para eliminar aprendiz
app.delete("/api/aprendices/:di", (req, res) => {
    const diAprendiz = req.params.di
    sistemaArchivo.readFile(rutaArchivojson, "utf-8", (error, datos) => {
        if (error) {
            return res.status(500).json({ Error: "Error de conexion" })
        }
        let listaAprendices = JSON.parse(datos)

        //verificar si existe antes de borrar
        const existe = listaAprendices.some(aprendiz => aprendiz.di == diAprendiz)
        if (!existe) {
            return res.status(404).json({ Error: "Aprendiz no encontrado." })
        }

        //filtrar la lista quitando el que coincide con el di
        listaAprendices = listaAprendices.filter(aprendiz => aprendiz.di != diAprendiz)

        //escritura de archivo
        sistemaArchivo.writeFile(rutaArchivojson, JSON.stringify
            (listaAprendices, null, 2), (error) => {
                if (error) {
                    return res.json({ Error: "No se puede eliminar." })
                }
                res.status(200).json({ mensaje: "Aprendiz eliminado correctamente." })
            })
    })
})

app.listen(PORT, () => {
    console.log(`SERVIDOR http://localhost:${PORT}
        http://127.0.0.1:${PORT}`);
});

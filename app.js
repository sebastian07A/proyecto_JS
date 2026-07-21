import express from "express";//ES
//mport {configDotenv} from "dotenv"
//configDotenv()
import "dotenv/config"

//const express = require("express");
const app = express();
const puerto = process.env.PORT || 3500;

app.get("/",(req,res)=>{
    res.send("Hola ficha 3407180 del SENA")
});

app.get("/misaludo",(req,res)=>{
    res.send(`<h1>saludo</h1><p>Hola soy Sebas</p>`)
});

app.get("/cliente/:id",(req,res)=>{
    const id = req.params.id
    res.send(`<h1>Clientes</h1>
        <p>Soy cliente con ID${id}</p>`)
});

app.get("/presentacion/:id",(req,res)=>{
    const id = req.params.id
    res.send(`<h1>Presentacion</h1>
        <p>Soy sebastian aprendiz sena con ID${id}</p>`)
});


app.listen(puerto, ()=>{
    console.log(`SERVIDOR http://localhost: ${puerto}
        http://127.0.0.1:${puerto}`);
});
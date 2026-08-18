const express = require( "express")
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send(`<h1>Api aprendices</h1>`)
});

//Lista para crear endpoint
app.get("api/aprendices", (req, res) => {
    res.json({menssaje: "endpoint para listar aprendices"})
})


app.listen(PORT, ()=>{
    console.log(`SERVIDOR http://localhost:${PORT}
        http://127.0.0.1:${PORT}`);
});

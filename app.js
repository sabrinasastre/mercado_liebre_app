const express = require ("express");
const path = require ("path");

const app = express ();


const publicPath = path.resolve(__dirname, "./Public");
app.use (express.static(publicPath));

app.listen (process.env.PORT || 3000, ()=> {
    console.log ("servidor corriendo en puerto 3000")
});

app.get ("/", (req, res)=>{
    res.sendFile (__dirname + "/Views/home.html") /*esta forma es del Chino*/
});

app.get ("/login", (req, res)=>{
    res.sendFile(path.resolve (__dirname, "./Views/login.html"))  /*esta forma está en el material*/
});

app.get ("/register", (req, res)=>{
    res.sendFile(path.resolve (__dirname, "./Views/register.html"))
});


app.get("*", (req,res)=>{
    res.send("¡la página que estás buscando, no se encuentra!")
}); 




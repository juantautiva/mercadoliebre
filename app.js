const path = require('path')
const PUERTO = 3030
const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
})

app.get('/new-product', (req, res) => {
    res.sendFile(path.join(__dirname, './views/create-product.html'));
})

app.listen(process.env.PORT || PUERTO, () => console.log(`Servidor escuchando por el puerto ${PUERTO}`)
);
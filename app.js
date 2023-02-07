//chamar o express package
const express = require('express');

//iniciar o express
const app = express();

//likar a pasta public para o servidor
app.use(express.static('public'));


//responde do servidor

app.get('/home', (request, response) => {
    response.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about.html')
})

app.get('/works', (request, response) => {
    response.sendFile(__dirname + '/views/works.html')
})

app.get('/gallery', (request, response) => {
    response.sendFile(__dirname + '/views/gallery.html')
})


//listen do servidor
app.listen(3000, () => console.log('Server running on port 3000'))
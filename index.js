const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const mysql = require('mysql')
const pessoas = require('./routes/pessoas')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'cadastro'
})

const dependencies = {
    connection
}

app.use(express.static('public'))

// view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('home'))
app.use('/pessoas', pessoas(dependencies))


connection.connect((err)=>{
    if (!err) {
        app.listen(port, () => console.log('OUVINDO NA PORTA '+ port + ', esse é o link para o app http://localhost:'+port+'/'))
    } else {
        console.log(err + ' Erro ao conectar no banco de dados') 
    }
})
const express = require("express")
const compression = require("compression")
const bodyParser = require("body-parser")
const logger = require("morgan")
const errorHandler = require("errorhandler")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path")

dotenv.config()

const app = express()
const server = require("http").Server(app)

app.set('port', process.env.PORT || 3000)
app.use(compression())
app.use(logger('dev'))
app.use(cors(({
    origin: "*",
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin']
})))
app.use(errorHandler())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

//conexão com mongo
mongoose.set('useNewUrlParser', true);

mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('error', () => {
    console.log("Falha ao conectar ao banco de dados")
    process.exit(1)
})

const router = require('./src/routes/api')(app)
server.listen(app.get('port'), () => {
    console.log('Servidor rodando na porta ' + app.get('port') + ' em modo ' + app.get('env'))
})

module.exports = app
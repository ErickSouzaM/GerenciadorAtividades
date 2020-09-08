const express = require('express')
const ProdutoController = require('../Controllers/produtoController')

module.exports = function(app) {
    const produtoRoute = express.Router()

    app.use('/api',produtoRoute, (req, res) => {
        res.writeHead(200)
        res.end('Api Funcionou com sucesso')
    })

    app.use('/produto',
        produtoRoute.post('/', ProdutoController.registrarProduto)
    )
}
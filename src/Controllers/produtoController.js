const mongoose = require('mongoose')
const Produto = require('../models/produtoModel')

exports.registrarProduto = function(req, res, next){
    Produto.create({
        nome: req.body.nome,
        quantidade: req.body.quantidade,
        valor: req.body.valor,
        marca: req.body.marca
    }, function(err, produtos){
        if(err)
            return res.status(500).send({
                message: 'Erro ao criar produto!'
            })
        return res.status(200).send({
            message: 'Produto criado com sucesso',
            Produto: produtos
        })
    })
}
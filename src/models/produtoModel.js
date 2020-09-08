const mongoose = require('mongoose')

var ProdutoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'Informe o nome do Produto']
    },
    quantidade: {
        type: String,
        required: [true, 'Informe a quantidade do Produto']
    },
    valor: {
        type: String,
        required: [true, 'Informe o valor do Produto']
    },
    marca: {
        type: String,
        required: [true, 'Informe a marca do Produto']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Produto', ProdutoSchema)
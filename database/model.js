const mongoose = require('mongoose')
const Schema = mongoose.Schema

let People = new Schema({
    nome: {
        type: String
    },
    sobrenome: {
        type: String
    },
    idade: {
        type: String
    },
    cidadeEstado: {
        type: String
    },
    profissao: {
        type: String
    },
    salario: {
        type: String
    }
}, {
    collection: 'Peoples'
})

module.exports = mongoose.model('People', People)
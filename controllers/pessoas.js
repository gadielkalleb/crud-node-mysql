const pessoas = require('../models/pessoas')

const index = async(connection, req, res) => {
    const results = await pessoas.findAll(connection)
    res.render('pessoas/index', { pessoas: results})
}

module.exports = { index }
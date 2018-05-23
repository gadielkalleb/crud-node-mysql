const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.render('projetos/projetos'))

module.exports = router

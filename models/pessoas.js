const findAll = (connection) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM pessoas', (err, result) => {
            if (err) reject(err)
            else resolve(result)
        })
    })
}

module.exports = { findAll }
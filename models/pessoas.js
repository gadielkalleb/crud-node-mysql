const findAll = (connection) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM pessoas', (err, result) => {
            if (err) reject(err)
            else resolve(result)
        })
    })
}

const deleteOne = (connection, id) => {
    return new Promise((resolve,reject) => {
        connection.query('delete from pessoas where id = '+id+' limit 1', (err) => {
            if (err) reject(err)
            else resolve(result)
        })
    })
}

module.exports = { findAll, deleteOne }
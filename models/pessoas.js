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
        connection.query('delete from pessoas where id = '+id+' limit 1', (err, result) => {
            if (err) reject(err)
            else resolve(result)
        })
    })
}

const update = (connection, id,data) => {
    new Promise((resolve, reject) => {
        connection.query(`update pessoas set nome='${data.nome}', nascimento='${data.nascimento}', cargo='${data.cargo}' where id = ${id}`, (err) => {
            if (err) reject(err)
            else resolve()
        })
    })
}

const create = (connection ,data) => {
    new Promise((resolve, reject) => {
        connection.query(`insert into pessoas (nome, nascimento, cargo) values ('${data.nome}', '${data.nascimento}', '${data.cargo}')`, (err) => {
            if (err) reject(err)
            else resolve()
        })
    })
}

const findById = (connection, id) => {
    return new Promise((resolve, reject) => {
        connection.query('select * from pessoas where id = '+id, (err, result) => {
            if (err) reject(err)
            else {
                if(result.length>0) {
                    resolve(result[0])
                } else {
                    resolve({})
                }
            }
        })
    })
}

module.exports = { findAll, deleteOne, create, findById, update }
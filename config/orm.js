const db = require('./connection.js')
const { getDefaultFlags } = require('mysql2/lib/connection_config')

getAll('groceries', groceries => {
    console.log(groceries)
})

const orm = {}


orm.create = (table,data, cb) => {
    db.query(`INSERT INTO ${table} SET ?`, data, (err, fields) => {
        if (err) { console.log(err) }
        cb(fields.insertId)
    })
}


orm.read = (table, cb) => {
    db.query(`SELECT * FROM ${table}`, (err, data) => {
        if (err) { console.log(err) }
        cb(data)
    })
}


orm.update = (table, updates, where) => {
    db.query(`UPDATE ${table} SET ? WHERE ?`, [updates, where], err => {
        if (err) { console.log(err) }
        cb()
    })
}

orm.delete = (table, where, cb) => {
    db.query(`DELETE FROM ${table} WHERE ?`, where, err => {
        console.log('deleted!')
    })
}
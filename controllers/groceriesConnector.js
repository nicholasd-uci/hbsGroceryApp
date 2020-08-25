const router = require('express').Router()
const db = require('../db')

// GET all items
router.get('/groceries', (req, res) => {
    orm.read(`../db/schema.sql`, (err, table) => {
        if (err) { console.log(err) }
        res.send(table)
    })
})

// POST one item
router.post('/groceries', (req, res) => {

})

// PUT one item
router.put('/groceries/:id', (req, res) => {
    
})

// DELETE one item
router.delete('/groceries/:id', (req, res) => {
    
})

module.exports = router
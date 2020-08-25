const orm = require('../config/orm.js')

const module = { }

module.getAll = (cb) => {
    orm.read('groceries', groceries => {
        cb(groceries)
    })
}

module.createOne = (grocery, cb) => {
    orm.create(`groceries`, grocery, id => cb(id))
}

module.updateOne = () => {
    
}

module.deleteOne = () => {
    
}
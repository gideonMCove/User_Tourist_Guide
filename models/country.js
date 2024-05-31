const mongoose = require('mongoose')
const Schema = require('mongoose')

const Country = new Schema(
    {

    }, {timestamps: true}
)
module.exports = mongoose.model('countrys', Country)
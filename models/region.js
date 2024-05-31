const mongoose = require('mongoose')
const Schema = require('mongoose')

const Region = new Schema(
    {

    }, {timestamps: true}
)
module.exports = mongoose.model('regions', Region)
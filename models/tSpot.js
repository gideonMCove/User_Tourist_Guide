const mongoose = require('mongoose')
const Schema = require('mongoose')

const TSpot = new Schema(
    {

    }, {timestamps: true}
)
module.exports = mongoose.model('tSpots', TSpot)
const mongoose = require('mongoose')
const Schema = require('mongoose')

const Country = new Schema(
    {
        topRegions: [
            {Type: Schema.Types.ObjectId, ref: 'region_id'},
            {Type: Schema.Types.ObjectId, ref: 'region_id'},
            {Type: Schema.Types.ObjectId, ref: 'region_id'}
        ],
        safetyRating: {Type: String, required: true},
        travelRating: {Type: Number, min: 1, max: 10, required: true},
        languages: {Type: String, required: true},
        currency: {Type: String, required: true},


    }, {timestamps: true}
)
module.exports = mongoose.model('countrys', Country)
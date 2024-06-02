const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Country = new Schema(
    {
        location: {type: String, required: true},
        topRegions: [
            {type: Schema.Types.ObjectId, ref: 'region_id'},
            // {type: Schema.Types.ObjectId, ref: 'region_id'},
            // {type: Schema.Types.ObjectId, ref: 'region_id'}
        ],
        safetyRating: {type: String, required: true},
        travelRating: {type: Number, min: 1, max: 10, required: true},
        languages: {type: String, required: true},
        currency: {type: String, required: true},


    }, {timestamps: true}
)
module.exports = mongoose.model('countrys', Country)
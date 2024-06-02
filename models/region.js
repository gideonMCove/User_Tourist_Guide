const mongoose = require('mongoose')
const Schema = require('mongoose')

const Region = new Schema(
    {        
        location: {Type: String, required: true},
        topTSpots: [
            {Type: Schema.Types.ObjectId, ref: 'tSpot_id'},
            {Type: Schema.Types.ObjectId, ref: 'tSpot_id'},
            {Type: Schema.Types.ObjectId, ref: 'tSpot_id'}
        ],
        safetyRating: {Type: String, required: true},
        travelRating: {Type: Number, min: 1, max: 10, required: true},
        languages: {Type: String, required: true},
        regionSpecific: {Type: String},

    }, {timestamps: true}
)
module.exports = mongoose.model('regions', Region)
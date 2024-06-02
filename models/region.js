const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Region = new Schema(
    {        
        location: {type: String, required: true},
        topTSpots: [
            {type: Schema.Types.ObjectId, ref: 'spot_id'},
            {type: Schema.Types.ObjectId, ref: 'spot_id'},
            {type: Schema.Types.ObjectId, ref: 'spot_id'}
        ],
        safetyRating: {type: String, required: true},
        travelRating: {type: Number, min: 1, max: 10, required: true},
        languages: {type: String, required: true},
        regionSpecific: {type: String},

    }, {timestamps: true}
)
module.exports = mongoose.model('regions', Region)
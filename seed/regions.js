const db = require('../db')
const TSpot = require('../models/tSpot')
const Region = require('../models/region')


// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    
    const regions = [
        {
            topTSpots: [
                {Type: Schema.Types.ObjectId, ref: 'tSpot_id'},
                {Type: Schema.Types.ObjectId, ref: 'tSpot_id'},
                {Type: Schema.Types.ObjectId, ref: 'tSpot_id'}
            ],
            safetyRating: {Type: String, required: true},
            travelRating: {Type: Number, min: 1, max: 10, required: true},
            languages: {Type: String, required: true},
            regionSpecific: {Type: String},
        }

    ]
    await Region.insertMany(regions)
    console.log("Created some regions")
}
const run = async () => {
    await main()
    db.close()
}

run()
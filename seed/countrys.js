const db = require('../db')
const TSpot = require('../models/tSpot')
const Region = require('../models/region')
const Country = require('../models/country')


// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const countrys = [
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
    
    
        },

    ]
    await Country.insertMany(countrys)
    console.log("Created some countrys")
}
const run = async () => {
    await main()
    db.close()
}

run()
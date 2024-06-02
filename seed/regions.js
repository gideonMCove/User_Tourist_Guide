const db = require('../db')
const Spot = require('../models/spot')
const Region = require('../models/region')


// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const toronto = await Spot.find({location: 'Toronto'})
    const ottawa = await Spot.find({location: 'Ottawa'})
    const perth = await Spot.find({location: 'Perth'})

    const regions = [
        {
            location: "Ontario, Canada",
            topTSpots: [
                toronto[0]._id,
                ottawa[0]._id,
                perth[0]._id
            ],
            safetyRating: "Take Normal Safety Precautions",
            travelRating: 10,
            languages: "English",
            
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
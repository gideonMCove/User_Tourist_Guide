const db = require('../db')
const Spot = require('../models/spot')
const Region = require('../models/region')
const Country = require('../models/country')



db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const ontario = await Region.find({location: "Ontario, Canada"})
    const countrys = [
        {
            location: "Canada",
            topRegions: [
              ontario[0]._id,
               
            ],
            safetyRating: "Take normal security precautions",
            travelRating: 9,
            languages: "English, French",
            currency: "Canadian Dollar",
    
    
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
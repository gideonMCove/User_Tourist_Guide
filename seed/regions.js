const db = require('../db')
const TSpot = require('../models/tSpot')
const Region = require('../models/region')


// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const countrys = [

    ]
    await Region.insertMany(regions)
    console.log("Created some regions")
}
const run = async () => {
    await main()
    db.close()
}

run()
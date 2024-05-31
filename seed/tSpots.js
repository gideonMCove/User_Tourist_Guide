const db = require('../db')
const TSpot = require('../models/tSpot')


// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const tSpots = [

    ]
    await TSpot.insertMany(tSpots)
    console.log("Created some tSpots")
}
const run = async () => {
    await main()
    db.close()
}

run()
const db = require('../db')
const TSpot = require('../models/tSpot')
const Region = require('../models/region')
const Country = require('../models/country')


// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const countrys = [

    ]
    await Country.insertMany(countrys)
    console.log("Created some countrys")
}
const run = async () => {
    await main()
    db.close()
}

run()
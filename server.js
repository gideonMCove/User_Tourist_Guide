const express = require('express')
const db = require('./db')
const spotController = require('./controllers/spotController')
const regionController = require('./controllers/regionController')
const countryController = require('./controllers/countryController')

// const bodyParser = require('body-parser')
// const logger = require('morgan')


// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001

const app = express()

// app.use(logger('dev'))
// app.use(bodyParser.json())


app.get('/', (req, res) => res.send('This is our landing page!'))

app.get('/spots', spotController.getAllSpots)
app.get('/spots/:id', spotController.getSpotById)
app.post('/spots', spotController.createSpot)
app.put('/spots/:id', spotController.updateSpot)
app.delete('spots/:id', spotController.deleteSpot)
app.get('/spots/items/:searchTerm', spotController.getSpotBySpotName )

app.get('/regions', regionController.getAllRegions)
app.get('/regions/:id', regionController.getRegionById)
app.post('/regions', regionController.createRegion)
app.put('/regions/:id', regionController.updateRegion)
app.delete('regions/:id', regionController.deleteRegion)
app.get('/regions/items/:searchTerm', regionController.getRegionByRegionName )

app.get('/countrys', countryController.getAllCountrys)
app.get('/countrys/:id', countryController.getCountryById)
app.post('/countrys', countryController.createCountry)
app.put('/countrys/:id', countryController.updateCountry)
app.delete('countrys/:id', countryController.deleteCountry)
app.get('/countrys/items/:searchTerm', countryController.getCountryByCountryName )





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
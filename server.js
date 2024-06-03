const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')

const app = express()
app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())

const db = require('./db')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})




const spotController = require('./controllers/spotController')
const regionController = require('./controllers/regionController')
const countryController = require('./controllers/countryController')








app.get('/', (req, res) => res.send('This is our landing page!'))

app.get('/spots', spotController.getAllSpots)
app.get('/spots/:id', spotController.getSpotById)
app.post('/spots', spotController.createSpot)
app.put('/spots/:id', spotController.updateSpot)
app.delete('/spots/:id', spotController.deleteSpot)
app.get('/spots/items/:searchTerm', spotController.getSpotBySpotName )

app.get('/regions', regionController.getAllRegions)
app.get('/regions/:id', regionController.getRegionById)
app.post('/regions', regionController.createRegion)
app.put('/regions/:id', regionController.updateRegion)
app.delete('/regions/:id', regionController.deleteRegion)
app.get('/regions/items/:searchTerm', regionController.getRegionByRegionName )

app.get('/countrys', countryController.getAllCountrys)
app.get('/countrys/:id', countryController.getCountryById)
app.post('/countrys', countryController.createCountry)
app.put('/countrys/:id', countryController.updateCountry)
app.delete('/countrys/:id', countryController.deleteCountry)
app.get('/countrys/items/:searchTerm', countryController.getCountryByCountryName )


app.get('*', (req, res) => res.send('404 page not found'))






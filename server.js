const express = require('express')
const db = require('./db')
const spotController = require('./controllers/spotControllers')

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




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
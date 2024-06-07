const Spot = require('../models/spot')
const Country = require('../models/country')
const Region = require('../models/region')



const searchTourism = async (req, res) => {

    try {
        const searchTerm = req.params.searchTerm

        let search = await Spot.find({ location: { $regex: searchTerm, $options: 'i'}})

        if (search.length === 0) {
            search = await Region.find({ location: { $regex: searchTerm, $options: 'i'}})
        }

        if (search.length === 0) {
            search = await Country.find({ location: { $regex: searchTerm, $options: 'i'}})
        }

        res.json(search)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    searchTourism
}



const Spot = require('../models/spot')

const getAllSpots = async (req, res) => {
    try {
        const spots = await Spot.find()
        res.json(spots)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getSpotById = async (req,res) => {
    try{
        const { id } = req.params
        const spot = await Spot.findById(id)
        if (spot){
            return res.json(spot)
        }
        return res.status(404).send(`that spot doesn't exist!!!!!!!!`)
    }
    catch(error){
        return res.status(500).send(error.message)
    }
}

const createSpot = async (req,res) => {
    try {
        const spot = await new Spot(req.body)
        await spot.save()
        return res.status(201),json({
            spot
        })
    } catch (error) {
        return res.status(500).json({ error: error.message})
    }
}

const updateSpot = async (req,res) => {
    try {
        let {id} = req.params
        let spot = await Spot.findByIdAndUpdate(id, req.body, { new: true })
        if (spot) {
            return res.status(200).json(spot)
        }
        throw new Error("Original Spot Not Found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteSpot = async (req,res) => {
    try {
        const { id } = req.params
        const deleted = await Spot.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Spot has been deleted!")
        }throw new Error("Spot not found")       
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getSpotBySpotName = async (req, res) => {
    try {
        const searchTerm = req.params.searchTerm
        const spots = await Spot.find({ item: { $regex: searchTerm, $options: 'i' } })
        res.json(spots)
    } catch (error) {
        console.error("Cannot Find Spot", error)
        return res.status(500).send(error.message)
    }
}



module.exports = {
    getAllSpots,
    getSpotById,
    createSpot,
    updateSpot,
    deleteSpot,
    getSpotBySpotName
}
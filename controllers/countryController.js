const Country = require('../models/country')

const getAllCountrys = async (req, res) => {
    try {
        const countrys = await Country.find()
        res.json(countrys)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getCountryById = async (req,res) => {
    try{
        const { id } = req.params
        const country = await Country.findById(id)
        if (country){
            return res.json(country)
        }
        return res.status(404).send(`that country doesn't exist!!!!!!!!`)
    }
    catch(error){
        return res.status(500).send(error.message)
    }
}

const createCountry = async (req,res) => {
    try {
        const country = await new Country(req.body)
        await country.save()
        return res.status(201),json({
            country
        })
    } catch (error) {
        return res.status(500).json({ error: error.message})
    }
}

const updateCountry = async (req,res) => {
    try {
        let {id} = req.params
        let country = await Country.findByIdAndUpdate(id, req.body, { new: true })
        if (country) {
            return res.status(200).json(country)
        }
        throw new Error("Original Country Not Found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteCountry = async (req,res) => {
    try {
        const { id } = req.params
        const deleted = await Country.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Country has been deleted!")
        }throw new Error("Country not found")       
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllCountrys,
    getCountryById,
    createCountry,
    updateCountry,
    deleteCountry
}
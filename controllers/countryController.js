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

const getCountryByCountryName = async (req, res) => {
    try {
        const searchTerm = req.params.searchTerm
        const countrys = await Country.find({ location: { $regex: searchTerm, $options: 'i' } })
        res.json(countrys)
    } catch (error) {
        console.error("Cannot Find Country", error)
        return res.status(500).send(error.message);
    }
}


module.exports = {
    getAllCountrys,
    getCountryById,
    createCountry,
    updateCountry,
    deleteCountry,
    getCountryByCountryName
}

// const { Firearm } = require('../models');
// const db = require('../db');
// db.on('error', console.error.bind(console, 'MongoDB connection error:'))


// const getAllFirearms = async (req, res) => {
//   try {
//     const searchTerm = req.query.name;
//     let firearms;

//     if (searchTerm) {
//       firearms = await Firearm.find({ name: new RegExp(searchTerm, 'i') }); // case-insensitive search
//     } else {
//       firearms = await Firearm.find();
//     }

//     res.json(firearms);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const getFirearmById = async (req, res) => {
//   try {
//     const firearm = await Firearm.findById(req.params.id);
//     if (!firearm) {
//       return res.status(404).json({ message: 'Firearm not found' });
//     }
//     res.json(firearm);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const createFirearm = async (req, res) => {
//   const firearm = new Firearm({
//     name: req.body.name,
//     caliber: req.body.caliber,
//     manufacturerId: req.body.manufacturerId,
//     history: req.body.history,
//     image: req.body.image
//   });

//   try {
//     const newFirearm = await firearm.save();
//     res.status(201).json(newFirearm);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// const updateFirearm = async (req, res) => {
//   try {
//     const firearm = await Firearm.findById(req.params.id);
//     if (!firearm) {
//       return res.status(404).json({ message: 'Firearm not found' });
//     }

//     firearm.name = req.body.name;
//     firearm.caliber = req.body.caliber;
//     firearm.manufacturerId = req.body.manufacturerId;
//     firearm.history = req.body.history;
//     firearm.image = req.body.image;

//     const updatedFirearm = await firearm.save();
//     res.json(updatedFirearm);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// const deleteFirearm = async (req, res) => {
//   try {
//     const firearm = await Firearm.findById(req.params.id);
//     if (!firearm) {
//       return res.status(404).json({ message: 'Firearm not found' });
//     }
//     await firearm.remove();
//     res.json({ message: 'Firearm deleted' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = { 
//   getAllFirearms,
//   getFirearmById,
//   createFirearm,
//   updateFirearm,
//   deleteFirearm,
// };
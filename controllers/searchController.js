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

        res.json(search);
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    searchTourism
}

// if (res.status !=404 || res.status !=304){
    // || res.status() !=res.status(304)

//     const conditionalTest = res.status(404)
//     try {
//         const searchTerm = req.params.searchTerm
//         let search = await Spot.find({ location: { $regex: searchTerm, $options: 'i'}})              
//         if (res.status() != conditionalTest ){
//             res.json(search)
//         }else {
//             let search = await Region.find({ location: { $regex: searchTerm, $options: 'i'}})
//             if (res.status() != res.status(404) ){
//                 res.json(search)
//             }else {
//                 let search = await Country.find ({ location: { $regex: searchTerm, $options: 'i'}})
//                 if (res.status() != res.status(404) ){
//                     res.json(search)
//                 }
//             }
//         } 
//     } catch (error) {
//         return res.status(500).send(error.message)
//     }
// }

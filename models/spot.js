const mongoose = require('mongoose')
const { Schema }  = require('mongoose')

const Spot = new Schema (
    {
        location: {type: String, required: true},
        hasHotel: {type: Boolean, required: true},
        travelRating: {type: Number, min:1, max:10, required: true},
        picture: {type: String, required: true},
        topRestaurants: [
           {
                name: {type: String, required: true},
                address: {type: String, required: true},
                number: {type: String, required: true},
                website: {type: String, required: true},
                price: {type: String, required: true},
                menu: {type: String, required: true},
                image: {type: String, required: true},
                cuisine: {type: String, required: true},
                rating: {type: Number, min: 1, max: 10, required: true}
           },
           {
                name: {type: String, required: true},
                address: {type: String, required: true},
                number: {type: String, required: true},
                website: {type: String, required: true},
                price: {type: String, required: true},
                menu: {type: String, required: true},
                image: {type: String, required: true},
                cuisine: {type: String, required: true},
                rating: {type: Number, min: 1, max: 10, required: true}
            },
            {
                name: {type: String, required: true},
                address: {type: String, required: true},
                number: {type: String, required: true},
                website: {type: String, required: true},
                price: {type: String, required: true},
                menu: {type: String, required: true},
                image: {type: String, required: true},
                cuisine: {type: String, required: true},
                rating: {type: Number, min: 1, max: 10, required: true}
            },
        ],
        topActivities: [
            {
                name: {type: String, required: true},
                address: {type: String, required: true},
                price: {type: String, required: true},
                rating: {type: Number, min: 1, max: 10, required: true},
                description: {type: String, required: true},
                image: {type: String, required: true},
                // seasonal: [{
                //     isSeasonal: {type: Boolean},
                //     whatSeason: { type: String}
                //      }]
            },
            {
                name: {type: String, required: true},
                address: {type: String, required: true},
                price: {type: String, required: true},
                rating: {type: Number, min: 1, max: 10, required: true},
                description: {type: String, required: true},
                image: {type: String, required: true},
                // seasonal: [{
                //     isSeasonal: {type: Boolean},
                //     whatSeason: { type: String}
                //      }]
            },
            {
                name: {type: String, required: true},
                address: {type: String, required: true},
                price: {type: String, required: true},
                rating: {type: Number, min: 1, max: 10, required: true},
                description: {type: String, required: true},
                image: {type: String, required: true},
            //     seasonal: [{
            //         isSeasonal: {type: Boolean},
            //         whatSeason: { type: String}
            //          }]
            },
            
        ],
        
        

    },
     {timestamps: true}
)
module.exports = mongoose.model('spots', Spot)


// //const resetCollections = async () => {
//     try {
//         await Brand.deleteMany({});
//         await Bicycle.deleteMany({});
//         await Bell.deleteMany({});
//         console.log('All collection reset');
//     } catch (error) {
//         console.error('Error resetting collections:', error);
//     }
// }; call at begging of main
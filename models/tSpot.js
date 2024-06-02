const mongoose = require('mongoose')
const Schema = require('mongoose')

const TSpot = new Schema(
    {
        location: {Type: String, required: true},
        hasHotel: {Type: Boolean, required: true},
        travelRating: {Type: Number, min:1, max:10, required:true},
        picture: {Type: String, required: true},
        topRestaurants: [
           {
                name: {Type: String, required: true},
                address: {Type: String, required: true},
                number: {Type: String, required: true},
                website: {Type: String},
                price: {Type: String, required: true},
                menu: {Type: String, required: true},
                image: {Type: String, required: true},
                cuisine: {Type: String, required: true},
                rating: {Type: Number, min: 1, max: 10, required: true}
           },
           {
                name: {Type: String, required: true},
                address: {Type: String, required: true},
                number: {Type: String, required: true},
                website: {Type: String},
                price: {Type: String, required: true},
                menu: {Type: String, required: true},
                image: {Type: String, required: true},
                cuisine: {Type: String, required: true},
                rating: {Type: Number, min: 1, max: 10, required: true}
            },
            {
                name: {Type: String, required: true},
                address: {Type: String, required: true},
                number: {Type: String, required: true},
                website: {Type: String},
                price: {Type: String, required: true},
                menu: {Type: String, required: true},
                image: {Type: String, required: true},
                cuisine: {Type: String, required: true},
                rating: {Type: Number, min: 1, max: 10, required: true}
            },
        ],
        topActivities: [
            {
                name: {Type: String, required: true},
                address: {Type: String},
                price: {Type: String, required: true},
                rating: {Type: Number, min: 1, max: 10, required: true},
                description: {Type: String, required: true},
                image: {Type: String, required: true},
                seasonal: [{
                    isSeasonal: {Type: Boolean},
                    whatSeason: { Type: String}
                     }]
            },
            {
                name: {Type: String, required: true},
                address: {Type: String},
                price: {Type: String, required: true},
                rating: {Type: Number, min: 1, max: 10, required: true},
                description: {Type: String, required: true},
                image: {Type: String, required: true},
                seasonal: [{
                    isSeasonal: {Type: Boolean},
                    whatSeason: { Type: String}
                     }]
            },
            {
                name: {Type: String, required: true},
                address: {Type: String},
                price: {Type: String, required: true},
                rating: {Type: Number, min: 1, max: 10, required: true},
                description: {Type: String, required: true},
                image: {Type: String, required: true},
                seasonal: [{
                    isSeasonal: {Type: Boolean},
                    whatSeason: { Type: String}
                     }]
            },
            
        ],
        
        

    }, {timestamps: true}
)
module.exports = mongoose.model('tSpots', TSpot)


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
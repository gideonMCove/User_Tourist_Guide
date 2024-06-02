const mongoose = require('mongoose')
const Schema = require('mongoose')

const TSpot = new Schema(
    {
        location: {Type: String, required: true},
        hasHotel: {Type: Boolean, required: true},
        travelRating: {Type: Number, min:1, max:10, required:true},
        topRestaurants: [
           {
                address: {Type: String, required: true},
                price: {
                    min: {Type: Number},
                    max: {Type: Number}
                },
                menu: {Type: String, required: true},
                image: {Type: String, required: true}
           },
           {
                address: {Type: String, required: true},
                price: {
                    min: {Type: Number},
                    max: {Type: Number}
                },
                menu: {Type: String, required: true},
                image: {Type: String, required: true}
            },
            {
                address: {Type: String, required: true},
                price: {
                    min: {Type: Number},
                    max: {Type: Number}
                },
                menu: {Type: String, required: true},
                image: {Type: String, required: true}
            },
        ],
        topActivities: [
            {
                address: {Type: String, required: true},
                price: {
                    min: {Type: Number},
                    max: {Type: Number}
                },
                rating: {Type: Number, min: 1, max: 10, required: true},
                seasonal: [{
                    isSeasonal: {Type: Boolean},
                    whatSeason: { Type: String}
                     }]
            },
            {
                address: {Type: String, required: true},
                price: {
                    min: {Type: Number},
                    max: {Type: Number}
                },
                rating: {Type: Number, min: 1, max: 10, required: true},
                seasonal: [{
                    isSeasonal: {Type: Boolean},
                    whatSeason: { Type: String}
                     }]
            },
            {
                address: {Type: String, required: true},
                price: {
                    min: {Type: Number},
                    max: {Type: Number}
                },
                rating: {Type: Number, min: 1, max: 10, required: true},
                seasonal: [{
                    isSeasonal: {Type: Boolean},
                    whatSeason: { Type: String}
                     }]
            },
            
        ],
        picture: {Type: String, required: true},
        

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
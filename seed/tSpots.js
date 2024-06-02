const db = require('../db')
const TSpot = require('../models/tSpot')


// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const tSpots = [
        {
            location: 'Toronto',
            hasHotel: true,
            travelRating: 9,
            picture: "https://moving2canada.com/wp-content/uploads/2022/08/Skyline-of-Toronto-at-dusk_social.jpg", 
            topRestaurants: [
               {
                    name: "Aloette",
                    address: "163 Spadina Ave",
                    number: "416 260-3444",
                    website: "https://aloetterestaurant.com/",
                    price: "$$$",
                    menu: "https://aloetterestaurant.com/wp-content/uploads/2024/06/2024.05.30-Aloette-Dinner.pdf",
                    image: "https://aloetterestaurant.com/menus-gallery/",
                    cuisine: "Elevated comfort dishes, plus french staples",
                    rating: 9
               },
               {
                    name: "CÀ PHÊ RANG",
                    address: "147 Spadina Ave",
                    number: "416 546-8995",
                    website: "https://capherang.ca/",
                    price: "$$",
                    menu: "https://lh3.googleusercontent.com/p/AF1QipMIYzcL9AeAQjrsDDXOyA6dX517USMxYZ1mkYMy=s1360-w1360-h1020-rw",
                    image: "https://media.blogto.com/uploads/2021/12/03/1638563475-20211203-rang-10.jpg?w=1400&cmd=resize&height=2500&quality=70",
                    cuisine: "Vietnamese ",
                    rating: 9
                },
                {
                    name: "Sushi Masaki Saito",
                    address: "88 Avenue Rd.",
                    number: "416 924-0888",
                    website: "https://www.masakisaito.ca/",
                    price: "$$$$",
                    menu: "https://www.masakisaito.ca/menu/",
                    image: "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/3378fb684e7e43adba04f65073912ee6",
                    cuisine: "Japanese",
                    rating: 10
                },
            ],
            topActivities: [
                {
                    name: "CN Tower",
                    address: "290 Bremner Blvd",
                    price:"$$",
                    rating: 10,
                    description: `Canada's most iconic building, fitted with observational decks and a restaurant.`,
                    image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/12/33/6d/3e.jpg",
                    seasonal: [{
                        isSeasonal: false,                       
                         }]
                },
                {
                    name: "Toronto Islands",
                    address: "9 Queens Quay W, ferry service",
                    price:"$",
                    rating: 9,
                    description: "An island chain off the coast of Toronto, where people can enjoy amusement parks, beaches, and nature in general",
                    image: "https://media.cntraveler.com/photos/5b2c068ff3db9f70f0179fe8/16:9/w_2240,c_limit/Toronto-Islands__GettyImages-885350470.jpg",
                    seasonal: [{
                        isSeasonal: true,
                        whatSeason: "Summer, Spring and Autumn preferable"
                         }]
                },
                {
                    name: "Royal Ontario Museum",
                    address: "100 Queens Park",
                    price: "$$$",                    
                    rating: 10,
                    description: "One of the most impressive museums in Canada. Something in there for almost everyone.",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Royal_Ontario_Museum_in_Fall_2021.jpg/1200px-Royal_Ontario_Museum_in_Fall_2021.jpg",
                    seasonal: [{
                        isSeasonal: false,
                        
                         }]
                },
                
            ],
                     
    
        },
        {
            location: 'Ottawa',
            hasHotel: true,
            travelRating: 9,
            picture: "https://www.tripsavvy.com/thmb/EZt0-WyTX49_1a1mu4d5juR0BqA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/parliament-hill-in-ottawa--ontario--canada-1212275972-9f6f6e45ce084df89aaebf972e15b27b.jpg", 
            topRestaurants: [
               {
                    name: "Mati",
                    address: "428 Preston St",
                    number: "613 680-3860",
                    website: "https://www.matiottawa.ca/",
                    price: "$$$$",
                    menu: "https://www.matiottawa.ca/menus",
                    image: "https://48649a11830924729036.cdn6.editmysite.com/uploads/b/48649a11830924729036d4dcb5a859c0b4fb64ee45b31411370ce9477bb83466/IMG_5791_1606780379.JPG?width=2400&optimize=medium",
                    cuisine: "Mediterranean seafood dishes",
                    rating: 9
               },
               {
                    name: "Metropolitain Brasserie Restaurant",
                    address: "700 Sussex Dr",
                    number: "613 562-1160",
                    website: "https://www.metropolitainbrasserie.com/",
                    price: "$$$",
                    menu: "https://www.metropolitainbrasserie.com/menu",
                    image: "https://images.squarespace-cdn.com/content/v1/63ca04e68588073bda191eb2/9540c9f2-d477-490d-a4f0-201d0a4b2868/IMG_1581.JPG",
                    cuisine: "French ",
                    rating: 8
                },
                {
                    name: "JOEY Rideau",
                    address: "50 Rideau St.",
                    number: "613-680-5639",
                    website: "https://joeyrestaurants.com/location/joey-rideau",
                    price: "$$$",
                    menu: "https://joeyrestaurants.com/location/joey-rideau/menu#food",
                    image: "https://www.marcacorona.it/media/projects/project/generated_Terra_33_Joey-Rideau-1.jpg.800x1000_q85_crop.jpg",
                    cuisine: "Contemporary",
                    rating: 8
                },
            ],
            topActivities: [
                {
                    name: "Parliament Hill",
                    address: "Wellington St",
                    price:"$",
                    rating: 8,
                    description: `Admire the architecture and learn about the capitals history`,
                    image: "https://www.vanbynen.ca/wp-content/uploads/2022/09/Parliment-Hill-Ottawa.jpg",
                    seasonal: [{
                        isSeasonal: false,                       
                         }]
                },
                {
                    name: "ByWard Market",
                    address: "55 ByWard Market Square",
                    price:"$$",
                    rating: 10,
                    description: "Enjoy a bite to eat as you browse farmers market stalls and enjoy tourist trap shops",
                    image: "https://facts.net/wp-content/uploads/2023/09/15-captivating-facts-about-byward-market-ottawa-1694536818.jpg",
                    seasonal: [{
                        isSeasonal: false,
                        
                         }]
                },
                {
                    name: "Rideau Canal Skateway",
                    address: "1 Elgin St",
                    price: "$",                    
                    rating: 10,
                    description: "Skate for kilometers on end while enjoying all the market stands on the canal!.",
                    image: "https://images.squarespace-cdn.com/content/v1/5e77f666d1740b5126214300/c2a73703-e276-4fd4-8389-0d6479b3f428/_DSC6746-1low+res.jpg",
                    seasonal: [{
                        isSeasonal: true,
                        whatSeason: "Winter only"
                        
                         }]
                },
                
            ],
                     
    
        },
        {
            location: 'Perth',
            hasHotel: true,
            travelRating: 9,
            picture: "https://i0.wp.com/ninanearandfar.com/wp-content/uploads/2021/06/DSC_0003.jpg?resize=775%2C514", 
            topRestaurants: [
               {
                    name: "Maximilian Restaurant",
                    address: "99 Gore St E",
                    number: "613 267-2536",
                    website: "https://www.maximiliansrestaurant.ca/",
                    price: "$$",
                    menu: "https://www.maximiliansrestaurant.ca/dine-in-menu",
                    image: "https://static.wixstatic.com/media/9711c1_7916d4d3dbd84001b97021166c5a7c6a~mv2.jpg/v1/fit/w_2500,h_1330,al_c/9711c1_7916d4d3dbd84001b97021166c5a7c6a~mv2.jpg",
                    cuisine: "Authentic European Cuisine, focus on schnitzels",
                    rating: 9
               },
               {
                    name: "Rockey River Cafe",
                    address: "8 Wilson St E",
                    number: "613 466-0777",
                    website: "https://www.rockyrivercafe.com/",
                    price: "$$",
                    menu: "https://www.rockyrivercafe.com/",
                    image: "https://media-cdn.tripadvisor.com/media/photo-s/18/b2/3d/81/nice-patio-at-the-back.jpg",
                    cuisine: "Bistro",
                    rating: 10
                },
                {
                    name: "Fiddleheads Bar and Grill",
                    address: "53 Herriott St.",
                    number: "613 267-1304",
                    website: "https://www.fiddleheadsbarandgrill.com/",
                    price: "$$",
                    menu: "https://www.fiddleheadsbarandgrill.com/menu",
                    image: "https://static.wixstatic.com/media/826863_84f8ac87931346d0be7985be6ca98ecb~mv2.jpg/v1/fill/w_1170,h_1325,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/826863_84f8ac87931346d0be7985be6ca98ecb~mv2.jpg",
                    cuisine: "Canadian Bar and Grill",
                    rating: 8
                },
            ],
            topActivities: [
                {
                    name: "Stewart park",
                    address: "41 Mill St",
                    price:"$",
                    rating: 8,
                    description: `Enjoy a walk in the park and admire the winding Tay River`,
                    image: "https://www.beautifulperth.com/stewartparkperth.jpg",
                    seasonal: [{
                        isSeasonal: false,                       
                         }]
                },
                {
                    name: "Perth Museum",
                    address: "11 Gore St E",
                    price:"$",
                    rating: 8,
                    description: "Enjoy a trip in the past to this 19-century stone mansion.",
                    image: "https://image.wmsm.co/6380a5c189aee/perth-museum-1.webp?quality=80&width=1280",
                    seasonal: [{
                        isSeasonal: false,
                        
                         }]
                },
                {
                    name: "Laking!",                    
                    price: "$",                    
                    rating: 10,
                    description: "Enjoy the many lakes of the area by swimming, fishing, or just relaxing by the water!",
                    image: "https://ottawa.ctvnews.ca/content/dam/ctvnews/en/images/2024/5/21/fatal-long-weekend-boat-crash-on-bobs-lake-1-6895522.jpg",
                    seasonal: [{
                        isSeasonal: false,
                        
                        
                         }]
                },
                
            ],
                     
    
        },

    ]
    await TSpot.insertMany(tSpots)
    console.log("Created some tSpots")
}
const run = async () => {
    await main()
    db.close()
}

run()
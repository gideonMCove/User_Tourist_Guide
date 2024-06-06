
// const countryEndpoint = `countrys`
const regionEndpoint = 'regions'
const spotEndpoint = 'spots'
const locationTest = document.querySelector('#location')

const searchBar = document.getElementById('searchBar')
const anchorCountry = document.getElementById('anchorCountry')
const anchorRegion = document.getElementById('anchorRegion')
const anchorSpot = document.getElementById('anchorSpot')
const topImage = document.getElementById('topImage')
// const button = document.getElementById('test')

const getCountries = async () => {
    const countrys = await axios.get(`http://localhost:3001/countrys`)
    console.log(countrys.data.message)
}
getCountries()

const getRegions = async () => {
    const regions = await axios.get(`http://localhost:3001/regions`)
    console.log(regions.data.message)
}
getRegions()



// button.addEventListener('click', async () => {
//     const res = await axios.get(`http://localhost:3001/${countryEndpoint}`)

    
//     function setTestLocation()  {        
//             locations = res.data[0].location
//             document.getElementById('location').innerHTML = locations
//         }
//         setTestLocation()
        

//     }
// )

// document.addEventListener('DOMContentLoaded', async () => {
//     const listCountry = document.getElementById('listCountry')
//     const res = await axios.get(`http://localhost:3001/${countryEndpoint}`)
//     listCountry.innerHTML =''
//     res.data.forEach(data => {
//         const locationCountry = document.createElement('li')
//         locationCountry.classList.add('locationCountry')
//         locationCountry.innerHTML = `
//         <h3><a href="" target="_blank">Name: ${data.location}</a></h3>

//         `
//         listCountry.appendChild(locationCountry)

//     })
// })

// document.addEventListener('DOMContentLoaded', async () => {
//     const listRegion = document.getElementById('listRegion')
//     const res = await axios.get(`http://localhost:3001/${regionEndpoint}`)
//     listRegion.innerHTML =''
//     res.data.forEach(data => {
//         const locationRegion = document.createElement('li')
//         locationRegion.classList.add('locationRegion')
//         locationRegion.innerHTML = `
//         <h3><a href="" target="_blank">Name: ${data.location}</a></h3>

//         `
//         listRegion.appendChild(locationRegion)

//     })
// })







    // let data = country.data
    
    // console.log(res.data)
    // let arrayCountry = []
    // res.data.countrys.forEach(country => {
    //     let location = res.data.countrys.location
    //     arrayCountry.push(location)
    //     const listCountry = document.getElementById('listCountry')
    //     listCountry.textContent = arrayCountry
        
    // })
    
    // document.addEventListener('DOMContentLoaded', () => {
    //     const searchButton = document.getElementById('searchButton');
    //     const searchInput = document.getElementById('searchInput');
    //     const firearmsList = document.getElementById('firearms-list');
    
    //     searchButton.addEventListener('click', async () => {
    //         const searchTerm = searchInput.value.trim();
    
    //         try {
    //             let response;
    //             if (searchTerm) {
    //                 response = await axios.get(http://localhost:3001/firearms?name=${encodeURIComponent(searchTerm)});
    //             } else {
    //                 response = await axios.get(http://localhost:3001/firearms);
    //             }
    
    //             firearmsList.innerHTML = '';
    //             response.data.forEach(firearm => {
    //                 const firearmItem = document.createElement('li');
    //                 console.log(firearm);
    //                 firearmItem.classList.add('firearmItem');
    //                 firearmItem.innerHTML = 
    //                     <h3>Name: ${firearm.name}</h3>
    //                     <p>Caliber: ${firearm.caliber}</p>
    //                     <p>Manufacturer: ${firearm.manufacturerId}</p>
    //                     <p> Ownership:${firearm.Ownership}</p>
    //                     <p>History: ${firearm.history}</p>
    //                     <img src="${firearm.Image}" alt="Firearm Image"/>
                        
    //                 ;
    //                 firearmsList.appendChild(firearmItem);
    //             });
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     });
    // });



    
   
// filter
// const getAccessoriesByColor = async (req, res) => {
//     try {
//         const color = req.params.color
//         const accessories = await Accessory.find({ color: { $regex: new RegExp(color, "i") } })
//         res.json(accessories)
//     } catch (error) {
//         console.error("Error fetching accessories by color:", error)
//         res.status(500).json({ error: error.message })
//     }
// }

// const country = require("../models/country")




// const countryEndpoint = `http://localhost:3001/countrys`
// const regionEndpoint = 'http://localhost:3001/region'
// const spotEndpoint = 'http://localhost:3001/spot'
    





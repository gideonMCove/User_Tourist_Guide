

const regionEndpoint = 'regions'
const spotEndpoint = 'spots'
const locationTest = document.querySelector('#location')


const anchorCountry = document.getElementById('anchorCountry')
const anchorRegion = document.getElementById('anchorRegion')
const anchorSpot = document.getElementById('anchorSpot')
const topImage = document.getElementById('topImage')




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


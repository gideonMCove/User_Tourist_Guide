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
const Service = require("./../models/servicesSchema")

const services = async (req, res) => {
    try {
        const getData = await Service.find()
        if (!getData) {
            res.status(400).json({ msg: "No data found" })
        } else {
            res.status(200).json(getData)
        }

    } catch (error) {
        res.status(400).json({ msg: "Unable to fetch data" })
    }
}

module.exports = services
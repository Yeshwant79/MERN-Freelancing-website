const mongoose = require('mongoose')

const servicesSchema = new mongoose.Schema({
    service_name: { type: String, require: true },
    description: { type: String, require: true },
    image: { type: String, require: false, default: "https://img.freepik.com/premium-vector/customer-service-icon-vector-full-customer-care-service-hand-with-persons-vector-illustration_399089-2810.jpg?w=996" }
})

const Services = new mongoose.model("Services", servicesSchema)

module.exports = Services
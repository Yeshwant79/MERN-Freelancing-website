const mongoose = require("mongoose")
const link = process.env.MONGO_URL

mongoose.connect(link)
    .then(() => {
        console.log("Database Connected")
    }).catch((error) => {
        console.log("error in Connection")
    })
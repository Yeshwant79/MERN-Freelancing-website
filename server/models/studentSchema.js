const mongoose = require("mongoose")
const studentSchma = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    contact: { type: String, require: true },
    password: { type: String, require: true },
    isAdmin: { type: Boolean, default: false, require: true }
}
)

const Student = new mongoose.model("Student", studentSchma)

module.exports = Student
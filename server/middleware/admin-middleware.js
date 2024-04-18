jwt = require('jsonwebtoken')
const student = require('../models/studentSchema')



// Add this middleware if we want to show all data in admin pannel if that user id Admin

// So for now use autontication from Auth  so we remove this middle from admin router forether we can add this if we want 

const adminMiddleware = async (req, res, next) => {

    try {
        const studentData = req.student
        // console.log(studentData)
        if (studentData.isAdmin === true) {
            next();
        }

    } catch (error) {
        res.status(400).json({ msg: "Invalid Token" })
        console.log(error)
    }

}

module.exports = adminMiddleware
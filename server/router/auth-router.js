const express = require('express')
const authcontroler = require("../controler/auth-controler")
const authMiddleware = require('../middleware/auth-middleware')
const router = express.Router()

// const { home, register } = require("../controler/auth-controler")


// --------------------------------------------

// router.get('/', (req, res) => {
//     res.status(200).send("Yeshwant")
// })

// router.get("/register", (req, res) => {
//     res.status(200).send("This is Register Page")

// ---------------------------------------------

// router.get("/", (home))

// router.get("/register", (register))

// ---------------------------------------------

router.get("/", (authcontroler.home))

router.post("/register", (authcontroler.register))

router.post("/login", (authcontroler.login))

router.get("/students", authMiddleware, authcontroler.getStudents)

module.exports = router
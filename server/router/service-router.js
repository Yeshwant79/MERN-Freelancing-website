const express = require("express")
const services = require("./../controler/serviceController")
const router = express.Router()

router.get('/service', services)

module.exports = router
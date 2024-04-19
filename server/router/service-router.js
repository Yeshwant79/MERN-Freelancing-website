const express = require("express")
const services = require("./../controler/serviceController")
const authMiddleware = require("../middleware/auth-middleware")
const router = express.Router()

router.get('/service', authMiddleware, services)

module.exports = router
require("dotenv").config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000
app.use(express.json());
const cors = require('cors')
app.use(cors())

const fileupload = require('express-fileupload')
app.use(fileupload());
app.use(express.static('assets'))
const path = require('path')
app.use('/assets', express.static(path.join(__dirname, 'assets')))

require("./utils/db")

// const corsOptions = {}

const router = require('./router/auth-router')
const contactRouter = require('./router/contact-router')
const serviceRouter = require('./router/service-router')
const adminRouter = require('./router/admin-router');
app.use('/api/auth', router)
app.use('/api', contactRouter)
app.use('/api/data', serviceRouter)
app.use('/api/admin', adminRouter)




// app.get('/', (req, res) => {
//     res.send('Hello!')
// })

app.listen(PORT, () => {
    console.log("connected");
})

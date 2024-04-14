const jwt = require('jsonwebtoken')
const student = require('./../models/studentSchema')

const authMiddleware = async (req, res, next) => {
    let token = req.headers['authorization'];
    // console.log(req.header)
    // console.log(token)

    if (!token) {
        return res.status(400).json({ msg: "Unauthourized HTTP, token not provided" })
    }
    else {
        try {

            if (token.startsWith('Bearer ')) {

                // remove bearer from string (token) from the header

                token = token.slice(7, token.length);
                // res.status(200).json({ msg: "Tocken  Croped" })
                console.log(token);

            }

            // VErifing Student 

            const data = jwt.verify(token, process.env.JWT_SECRET_KEY)

            const verify = await student.findOne({ _id: data.id })

            req.student = verify;

            next();

        } catch (error) {
            res.status(400).json({ msg: "Invalid Token" })
            console.log(error)
        }

    }


}

module.exports = authMiddleware
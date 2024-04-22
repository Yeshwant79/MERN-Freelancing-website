const Student = require("./../models/studentSchema")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

const home = async (req, res) => {
    try {
        res.status(200).send("Yeshwant")
    } catch (error) {
        console.log(error)
    }
}

// const register = async (req, res) => {

//     const hashedpass = await bcrypt.hash(req.body.password, 10)

//     const data = new Student({
//         name: req.body.name,
//         email: req.body.email,
//         contact: req.body.contact,
//         // password: req.body.password,
//         password: hashedpass,
//         // confirmPassword: req.body.confirmPassword
//         confirmPassword: hashedcpass
//     })

//     try {

//         if (!data.name || !data.email || !data.contact || !data.password || !confirmPassword) {
//             res.status(400).json({ msg: "All fields are required" })
//             console.log("All fields are required");
//         }
//         else {

//             const emailExist = await Student.findOne({ email: req.body.email })

//             if (emailExist) {
//                 res.status(400).json({ msg: "Email alredy exist" })
//                 console.log("Email alredy exist")
//             }
//             else {
//                 // ----------------------------------------------------------------------------
//                 // if (data.password === data.confirmPassword) {
//                 if (req.body.password === req.body.confirmPassword) {
//                     const item = await Student.create(data)
//                     res.status(200).json(item)
//                     // res.status(200).send(req.body)
//                     console.log(req.body)
//                     // console.log("Data Saved")
//                 }
//                 else {
//                     res.status(400).json({ msg: "Password not Matched" })
//                     console.log("Password not Matched")
//                 }
//             }
//         }

//     } catch (error) {
//         res.status(500).send({ msg: "Internal Server Error" })
//     }
// }

// const register = async (req, res) => {

//     const { name, email, contact, password, confirmPassword } = req.body

//     try {

//         if (!name || !email || !contact || !password || !confirmPassword) {
//             res.status(400).json({ msg: "All fields are required" })
//             console.log("All fields are required");
//         }
//         else {

//             const emailExist = await Student.findOne({ email: email })

//             if (emailExist) {
//                 res.status(400).json({ msg: "Email alredy exist" })
//                 console.log("Email alredy exist")
//             }
//             else {
//                 // ----------------------------------------------------------------------------
//                 if (password === confirmPassword) {
//                     try {
//                         const hashedpass = await bcrypt.hash(password, 10)

//                         const data = new Student({
//                             name: name,
//                             email: email,
//                             contact: contact,
//                             password: hashedpass
//                         })

//                         // const item = await Student.create(data)
//                         const item = await data.save()
//                         //generate token
//                         const storedData = await Student.findOne({ email: email })
//                         const token = jwt.sign({ id: storedData._id }, process.env.JWT_SECRET_KET, { expiresIn: "5d" })
//                         res.status(200).json({ msg: item, token: token })
//                         console.log("Data Saved")
//                     } catch {
//                         console.log(error)
//                         res.status(400).json({ msg: "Unable to register" })
//                     }
//                 }
//                 else {
//                     res.status(400).json({ msg: "Password not Matched" })
//                     console.log("Password not Matched")
//                 }
//             }
//         }

//     } catch (error) {

//         res.status(500).json({ msg: "Internal Server Error" })
//     }
// }

const register = async (req, res) => {
    const { name, email, contact, password, confirmPassword } = req.body;

    if (!name || !email || !contact || !password || !confirmPassword) {
        return res.status(400).json({ msg: "all fields are required" });
    } else {
        const emailExist = await Student.findOne({ email: email });
        if (emailExist) {
            return res.status(400).json({ msg: "Email already exists." });
        } else {
            if (password == confirmPassword) {
                try {
                    const hashpass = await bcrypt.hash(password, 10);
                    const data = new Student({
                        name: name,
                        email: email,
                        contact: contact,
                        password: hashpass,
                    });

                    const studentCreated = await data.save();
                    const storedData = await Student.findOne({ email: email });
                    const token = jwt.sign({ id: storedData._id }, process.env.JWT_SECRET_KEY, { expiresIn: "2h" });

                    res.status(200).json({ msg: studentCreated, 'token': token });
                } catch (error) {
                    console.log(error);
                    res.status(400).json({ msg: "Unable to Register!" });
                }
            } else {
                return res.status(400).json("Password does not match");
            }
        }
    }
};

const login = async (req, res) => {

    const { email, password } = req.body

    try {

        if (!email || !password) {
            res.status(400).json({ msg: "All fields are required" })
            console.log("All fields are required");
        }
        else {
            const emailExist = await Student.findOne({ email: email })

            if (emailExist) {

                const isMatch = await bcrypt.compare(password, emailExist.password)

                if ((emailExist.email === email) && isMatch) {
                    const token = jwt.sign({ id: emailExist._id }, process.env.JWT_SECRET_KEY, { expiresIn: "2h" });
                    res.status(200).json({ msg: "You have logged in", 'token': token })
                } else {

                    res.status(400).json({ msg: "Email or Password is not valid" })
                }
            }
            else {
                res.status(400).json({ msg: "You are not registerd user" })
            }
        }

    } catch (error) {
        console.log(error)
        res.status(400).json({ msg: "Unable to login" })

    }
}

const getStudents = async (req, res) => {
    try {
        // This req.student is not getting from database it comes by default from request ant its name can be any thing
        const studentData = req.student


        // TO Show user data if it exist
        // console.log(studentData);

        // Hear we need only data not message so we are not sending message in json
        return res.status(200).json(studentData)
    } catch (error) {
        res.status(500).json({ msg: "Unable to find Data" })
    }
}

module.exports = { home, register, login, getStudents }
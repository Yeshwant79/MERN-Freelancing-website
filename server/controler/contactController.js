const contact = require('./../models/contactSchema')

const contactForm = async (req, res) => {

    try {

        const { name, email, message } = req.body

        if (!name || !email || !message) {
            res.status(400).json({ msg: "All fields are required" })
            console.log("All fields are required");
        }
        else {

            const data = new contact({
                name,
                email,
                message
            });

            const contactCreated = await data.save();
            res.status(200).json({ msg: contactCreated })

            console.log("Contact details saved")
        }


    } catch (error) {
        console.log(error);
    }

}
module.exports = contactForm
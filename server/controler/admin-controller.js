const student = require("./../models/studentSchema")
const contact = require("./../models/contactSchema")
const service = require("./../models/servicesSchema")

const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'assets');

const getAllStudents = async (req, res) => {
    try {
        const getData = await student.find()
        if (!getData || getData.length === 0) {
            res.status(404).json({ msg: "data not found" })
        } else {
            res.status(200).json(getData)
        }

    } catch (error) {
        res.status(400).json({ msg: "Unable to fetch data" })
        console.log(error);
    }
}

const getAllContacts = async (req, res) => {
    try {
        const getData = await contact.find()
        if (!getData || getData.length === 0) {
            res.status(404).json({ msg: "data not found" })
        } else {
            res.status(200).json(getData)
        }
    } catch (error) {
        res.status(400).json({ msg: "Unable to fetch data" })
        console.log(error);
    }
}

const getSingleStudent = async (req, res) => {
    const id = req.params.id
    try {
        const data = await student.findOne({ _id: id })
        if (!data) { res.status(400).json({ error: "No data found" }) }
        else { res.status(200).json(data) }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" })
    }
}

const getSingleContact = async (req, res) => {
    const id = req.params.id
    try {
        const data = await contact.findOne({ _id: id })
        if (!data) { res.status(400).json({ error: "No data found" }) }
        else { res.status(200).json(data) }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" })
    }
}

const deleteSingleStudentData = async (req, res) => {
    try {
        const id = req.params.id
        const data = await student.deleteOne({ _id: id })
        res.status(200).json({ msg: "data deleted" })
    } catch (error) {
        res.status(500).json({ msg: "failed to delete data" })
    }
}

const deleteSingleContactData = async (req, res) => {
    try {
        const id = req.params.id
        const data = await contact.deleteOne({ _id: id })
        res.status(200).json({ msg: "data deleted" })
    } catch (error) {
        res.status(500).json({ msg: "failed to delete data" })
    }
}

const updateStudent = async (req, res) => {
    try {
        const id = req.params.id
        const updateData = req.body
        const data = await student.updateOne({ _id: id }, { $set: updateData })
        res.status(200).json({ msg: "data updated" })
    } catch (error) {
        res.status(500).json({ msg: "failed to update data" })
    }
}

const addServices = async (req, res) => {
    try {
        const { service_name, description } = req.body;
        const { uploadFile } = req.files
        // console.log(req.files)
        // console.log(uploadFile);
        if (!service_name || !description) {
            return res.status(400).json({ msg: "all fields are required" });
        } else {
            uploadFile.mv(path.join(filePath, uploadFile.name))
            const addData = new service({
                service_name,
                description,
                image: uploadFile.name
            });

            addData.save()
            res.status(200).json({ msg: "data added successfully" })
        }
    } catch (error) {
        res.status(500).json({ msg: "failed to add data" })
        console.log(error)
    }
}

const deleteServices = async (req, res) => {
    try {
        const id = req.params.id
        // const data = await service.deleteOne({ _id: id })
        // res.status(200).json({ msg: "data deleted" })

        const data = await service.findById(id);

        if (!data) {
            return res.status(404).json('Data not found');
        }

        // Delete the file from the static folder
        const filePath = path.join(__dirname, '..', 'assets', data.image);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
        await service.findByIdAndDelete(id);
        res.status(200).json("Data and file deleted")

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "failed to delete data" })
    }
}


module.exports = { getAllStudents, getAllContacts, getSingleStudent, getSingleContact, deleteSingleStudentData, deleteSingleContactData, updateStudent, addServices, deleteServices }
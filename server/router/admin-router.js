const express = require('express')
const { getAllStudents, getAllContacts, getSingleStudent, getSingleContact, deleteSingleStudentData, deleteSingleContactData, updateStudent, addServices, deleteServices } = require("./../controler/admin-controller")
// const authcontroler = require("./../controler/admin-controller")
const router = express.Router()

// router.get('/student', authcontroler.getAllStudents)
router.get('/student', getAllStudents)

// router.get('/contact', authcontroler.getAllContacts)
router.get('/contact', getAllContacts)

router.get('/student/:id', getSingleStudent)

router.get('/contact/:id', getSingleContact)


router.delete('/student/delete/:id', deleteSingleStudentData)

router.delete('/contact/delete/:id', deleteSingleContactData)

router.put('/student/update/:id', updateStudent)

router.post('/services/post', addServices)

router.delete('/services/delete/:id', deleteServices)

module.exports = router
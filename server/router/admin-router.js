const express = require('express')
const authMiddleware = require('./../middleware/auth-middleware')
const { getAllStudents, getAllContacts, getSingleStudent, getSingleContact, deleteSingleStudentData, deleteSingleContactData, updateStudent, addServices, deleteServices } = require("./../controler/admin-controller")
// const authcontroler = require("./../controler/admin-controller")
const router = express.Router()

// router.get('/student', authcontroler.getAllStudents)
// router.get('/student', getAllStudents)

router.get('/student', authMiddleware, getAllStudents)
// Above we add authMiddleware for authentication in last after complition of all Project,frentend and API
// ----------------------------------


// router.get('/contact', authcontroler.getAllContacts)
router.get('/contact', authMiddleware, getAllContacts)

router.get('/student/:id', getSingleStudent)

router.get('/contact/:id', getSingleContact)


router.delete('/student/delete/:id', deleteSingleStudentData)

router.delete('/contact/delete/:id', deleteSingleContactData)

router.put('/student/update/:id', updateStudent)

router.post('/services/post', authMiddleware, addServices)

router.delete('/services/delete/:id', authMiddleware, deleteServices)

module.exports = router
const {completeInfoDoctor, getSingleDoctorById, deleteDoctorById, findDoctor, findTopDoctors} = require("../controllers/doctor")
const express = require('express')
const passport = require('../config/passport-strats')
const router = express.Router()

router.post("/updateProfile", passport.authenticate('jwtDoc', {session: false}), completeInfoDoctor)
router.post("/findById", getSingleDoctorById)
router.post("/deleteById", passport.authenticate('jwtDoc', {session: false}), deleteDoctorById)
router.post("/find", findDoctor)
router.post("/findTop", findTopDoctors)

module.exports = router
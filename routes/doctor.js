const {completeInfoDoctor, getSingleDoctorById, deleteDoctorById, findDoctor, findTopDoctors/*, findTopInAllCategories*/} = require("../controllers/doctor")
const express = require('express')
const passport = require('../config/passport-strats')
const router = express.Router()

router.post("/findById", getSingleDoctorById)
router.post("/find", findDoctor)
router.post("/findTop", findTopDoctors)
// router.post("/findTopInAllCategories", findTopInAllCategories) problematic logically and programatically
router.post("/updateProfile", passport.authenticate('jwtDoc', {session: false}), completeInfoDoctor)
router.post("/deleteById", passport.authenticate('jwtDoc', {session: false}), deleteDoctorById)

module.exports = router
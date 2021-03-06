const {registerDoctorBasic, registerPatientBasic, login} = require("../controllers/auth")
const express = require('express')
const passport = require('../config/passport-strats')
const router = express.Router()

router.post("/signup/doctor", registerDoctorBasic)
router.post("/signup/patient", registerPatientBasic)
router.post("/login/doctor", passport.authenticate("localDoc", {session: false}), login)
router.post("/login/patient", passport.authenticate("localPat", {session: false}), login)

module.exports = router
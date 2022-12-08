const express = require('express');
const  router = express.Router()
const {register,login} = require ('../controllers/auth')
const {auth} = require('../middleware/auth')
const {addDevice, getDevices, getDevice} = require('../controllers/device')
const {addLocation} = require('../controllers/location')

router.post('/device', auth,addDevice)
router.get('/devices', getDevices)
router.get('/device/:id', getDevice)

router.post('/location', auth,addLocation)

router.post('/register',register)
router.post('/login',login)


module.exports = router;
const express = require('express')
const userController = require('../Controller/userController')
const eventController = require('../Controller/eventController')
const router = express.Router()


router.post('/users' ,userController.addUser)
router.post('/events' ,eventController.addEvents)
router.get('/users' ,userController.getUsers)
router.get('/events/:userId' ,eventController.getEvents)
router.delete('/events/:id' ,eventController.deleteEvent)
module.exports = router
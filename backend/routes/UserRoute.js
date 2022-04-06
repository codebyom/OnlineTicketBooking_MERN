
const express = require('express')
const router = express.Router()
const {getUser,postUser} = require('../controller/UserController')

router.route('/user').get(getUser).post(postUser)

module.exports = router
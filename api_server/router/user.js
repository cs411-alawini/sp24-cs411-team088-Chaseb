const express = require('express')
const router = express.Router()

const user_handler = require('../router_handler/user')

const expressJoi = require('@escook/express-joi')

const { reg_login_schema } = require('../schema/user')

router.post('/reguser', expressJoi(reg_login_schema), user_handler.regUser)
router.post('/login', expressJoi(reg_login_schema), user_handler.login)

router.get('/getLocation',user_handler.getLocation)

module.exports = router

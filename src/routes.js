const express = require('express')
//const router = express.Router()
const tool = require('./models/toolModal')

router.post('/tool', ToolControl.store)
router.post('/update', ToolControl.update)
router.get('/tool', ToolControl.index)

module.exports = router
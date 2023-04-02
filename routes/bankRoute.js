//Routes
const express = require('express')
const router = express.Router()
const bankController = require('../controllers/bankController')

router.route('/')
    .get (bankController.getData)
    .post(bankController.createbank)
    

router.route('/:id')
    .get(bankController.getDataByID)
    .patch(bankController.updatebank)
    .delete(bankController.deletebank)


module.exports = router

const express = require('express')
const router = express.Router()
const uploadFile= require('../app/middlewares/fileupload')
const uploadFileController = require('../app/controllers/fileUploadController')
router.post('/upload',uploadFile,uploadFileController.create)

module.exports= router
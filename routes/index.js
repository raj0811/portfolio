const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homecontroller');


router.get('/',homeController.home);
router.get('/about', homeController.about);
router.get('/projects',homeController.projects)


module.exports = router; 
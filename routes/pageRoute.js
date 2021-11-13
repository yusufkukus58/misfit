const express = require('express')
const pageController = require('../controllers/pageController');

const router = express.Router();

router.route('/').get(pageController.getIndexPage);
router.route('/about').get(pageController.getAboutPage);
router.route('/contact').get(pageController.getContactPage);
router.route('/gallery').get(pageController.getGalleryPage);
router.route('/trainings').get(pageController.getTrainingsPage);
router.route('/register').get(pageController.getRegisterPage);

router.route('/login').get(pageController.getLoginPage);

module.exports = router;

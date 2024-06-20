const express = require('express');
const { getAllCamps, createCamp } = require('../controllers/campController');
const router = express.Router();

router.get('/', getAllCamps);
router.post('/', createCamp);

module.exports = router;

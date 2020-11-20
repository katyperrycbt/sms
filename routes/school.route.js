var express = require('express');

var controller = require('../controllers/school.controller');

var router = express.Router();

router.get('/week', controller.week);
router.get('/room', controller.room);
router.get('/select/:studentId', controller.selectStudents);
router.get('/eliminate', controller.eliminate);
router.get('/assign', controller.assign);

module.exports = router;
const express = require('express');
const router = express.Router();
const agentreparationController = require('../Controllers/agentreparationController');

router.post('/addagentReparation',agentreparationController.addAgentReparation);

module.exports = router;
const express = require('express');
const router = express.Router();
const agentassuranceController = require('../Controllers/agentassuranceController');

router.post('/addagentAssurance',agentassuranceController.addAgentAssurance);

module.exports = router;
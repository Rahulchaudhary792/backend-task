const express = require('express');
const router = express.Router();
const { getLeads, transformAndStoreLeads } = require('../controllers/leadController');
const { generatePDF, generateCSV } = require('../controllers/reportController');

// Define your routes
router.get('/leads', getLeads);
router.post('/leads/transform', transformAndStoreLeads);
router.get('/report/pdf', generatePDF); // Ensure this function is correctly imported
router.get('/report/csv', generateCSV); // Ensure this function is correctly imported

module.exports = router;

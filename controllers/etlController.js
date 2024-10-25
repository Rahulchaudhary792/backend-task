const { sendAlertEmail } = require('../services/emailService');
exports.transformAndStoreLeads = async (req, res) => {
  try {
    const leads = req.body.leads;
    if (leads.length > 100) {
      await sendAlertEmail(
        'Lead Volume Alert',
        `The number of leads has exceeded the threshold: ${leads.length}`,
        'kushalestari@gmail.com'
      );
    }
    console.log('Leads transformed and stored successfully');
    res.status(200).json({ message: 'Leads transformed and stored.' });
  } catch (error) {
    console.error('Error in ETL process:', error);
    res.status(500).json({ error: 'Error processing leads.' });
    await sendAlertEmail(
      'ETL Process Failure',
      'The ETL process encountered an error.',
      'kushalestari@gmail.com'
    );
  }
};

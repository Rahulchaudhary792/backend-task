const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

exports.generatePDF = async (req, res) => {
  try {
    const doc = new PDFDocument();
    const filePath = path.join(__dirname, '../../report.pdf');
    const stream = fs.createWriteStream(filePath);

    doc.pipe(stream);

    doc.fontSize(20).text('EzyMetrics Report', { align: 'center' }).moveDown(2);

    const leads = [
      { name: 'John Doe', campaign: 'Campaign 1', status: 'Active' },
      { name: 'Jane Doe', campaign: 'Campaign 2', status: 'Inactive' },
    ];

    doc.fontSize(14).text('Name', 50, 150);
    doc.text('Campaign', 200, 150);
    doc.text('Status', 400, 150);

    doc.moveTo(50, 170).lineTo(550, 170).stroke();

    let y = 190;
    leads.forEach((lead) => {
      doc.text(lead.name, 50, y);
      doc.text(lead.campaign, 200, y);
      doc.text(lead.status, 400, y);
      y += 20;
    });

    doc.end();

    stream.on('finish', () => {
      res.download(filePath, 'report.pdf', (err) => {
        if (err) console.error('Error downloading PDF:', err);
        fs.unlinkSync(filePath);
      });
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).json({ error: 'Error generating PDF' });
  }
};

exports.generateCSV = (req, res) => {
  res.send('CSV generation logic goes here.');
};

var wkhtmltopdf = require('wkhtmltopdf');

var fs = require('fs');
var html = fs.readFileSync('resume.html', 'utf8');

var options = {
    pageSize: 'A4',
    marginTop: '15mm',
    marginRight: '10mm',
    marginBottom: '15mm',
    marginLeft: '20mm',
    zoom: 1.0,
    userStyleSheet: 'resume.css',
    output: 'Yuri_Beliakov_EN.pdf'
};

wkhtmltopdf(html, options);

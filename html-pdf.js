var wkhtmltopdf = require('wkhtmltopdf');

var fs = require('fs');
var resume = fs.readFileSync('resume.html', 'utf8');
var letter = fs.readFileSync('letter.html', 'utf8');

var options = {
    pageSize: 'A4',
    marginTop: '10mm',
    marginRight: '5mm',
    marginBottom: '10mm',
    marginLeft: '15mm',
    zoom: 1.0,
    userStyleSheet: 'styles.css'
};


wkhtmltopdf(resume, Object.assign(options, {output: 'Yuri_Beliakov_CV.pdf'}));
wkhtmltopdf(letter, Object.assign(options, {output: 'Yuri_Beliakov_letter.pdf'}));

var wkhtmltopdf = require('wkhtmltopdf');

var fs = require('fs');
var html = fs.readFileSync('resume.html', 'utf8');

var options = {
    pageSize: 'A4',
    marginTop: '15mm',
    marginRight: '20mm',
    marginBottom: '15mm',
    marginLeft: '20mm',
    zoom: 1.2,
    userStyleSheet: 'node_modules/github-markdown-css/github-markdown.css',
    output: 'Yuri_Belyakov_EN.pdf'
};

wkhtmltopdf(html, options);

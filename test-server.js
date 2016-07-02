var browserify = require('browserify-middleware');
var express = require('express');
var app = express();


app.use('/sizlate/spec', browserify(process.cwd() + '/../sizlate/spec/'));
app.use('/speclate/spec', browserify(process.cwd() + '/../speclate/spec/'));

app.use('/speclate', express.static(process.cwd() + '/../speclate/testRunner'));
app.use('/sizlate', express.static(process.cwd() + '/../sizlate/testRunner'));

// bit dodge, we need to host speclate on /
app.use('/', express.static(process.cwd() + '/../speclate/spec/sample'));


app.listen(3000);
console.log('Running on port 3000');
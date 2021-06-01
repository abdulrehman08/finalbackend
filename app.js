var express = require('express')
var app = express();
const path=require('path');
app.use(express.static(path.join(__dirname,"public")));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, `/public/index.html`));
});
app.listen(5000,console.log("frontend application started at 5000"))
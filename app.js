var express = require('express')
var app = express();
const path=require('path');
const env=require('dotenv');

app.use(express.static(path.join(__dirname,"public")));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, `/public/index.html`));
});
env.config({path:'/config.env'});

app.listen(process.env.PORT||5000,console.log("application started at 5000"))
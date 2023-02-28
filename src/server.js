var express = require('express');
var props = require('./config/properties');
var db = require('./config/db');
var bodyParser=require('body-parser');
var clinicalRoutes = require('./routes');
var cors=require('cors');


db();

var app = express();

app.use(cors())

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var clinicalRouter= express.Router();
clinicalRoutes(clinicalRouter);
app.use('/clinicalsapi',clinicalRouter);

app.listen(props.PORT,(err)=>{
    if(err) console.log(err);
    console.log("Application Started On Port: "+props.PORT);
})

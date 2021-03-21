// require the modules (to install use npm install ::name)
const express    = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));
// extended : true ::allows to post extended objects

// display on the root 
app.get( "/", function(req,res){
    res.sendFile(__dirname + "/index.html");
})

// post method
app.post("/",function(req,res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var result = weight/(height**2);

    res.send("<center>Your BMI is : " + result + "</center>");
})

app.listen(3000,function(){
    console.log("Started at the port 3000!!");
})

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
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1+num2;

    res.send("<center>The sum obtained is : " + result + "</center>");
})

app.listen(3000,function(){
    console.log("Started at the port 3000!!");
})
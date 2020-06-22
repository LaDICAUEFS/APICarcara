const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const fs = require("fs");

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/",(req,res)=>{

    fs.readFile("../upload/test.txt","utf-8",(err, data)=> {
        if(err) throw err;
        console.log(data);
    });

    res.json({
            teste:"teste"                   // o json  com os os dados  para  teste
    });
    res.status(200);

});

app.post("/",(req, res) => {

    fs.writeFile("../upload/test.txt","Hey there!","utf8", (err)=> {
        if(err) {
            return console.log(err);
        }
        console.log("arquivo salvo !");
    });

    res.json({
        teste:"teste"                   // o json  com os os dados  para teste 
    });
    
    res.status(200);
  
});
app.listen(3200,()=>{console.log("Api em execução!");});
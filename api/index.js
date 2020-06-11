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

    res.json({
            teste:"teste"                   // o json  com os os dados 
    });
    res.status(200);
});

app.post("/",(req, res) => {

         res.send("teste!");
         res.status(200);
    /*fs.writeFile('./upload/message.txt', 'Hello World! \r \n',{enconding:'utf-8',flag: 'a'}, function (err) {
        if (err) throw err;
        console.log('Arquivo salvo!');
    });

    const calback = (err)=>{
        if (err) throw err;
        console.log('Arquivo salvo!');
    }
    res.statusCode= 200;

    fs.writeFile("../upload/test.txt", "Hey there!","utf8", function(err) {
        if(err) {
            return console.log(err);
        }
    
        console.log("The file was saved!");
    }); 
   */
});

app.put("/:id",(req,res)=>{

})

app.delete("/:id",(req,res)=>{

});

app.listen(3200,()=>{console.log("Api em execução!");});
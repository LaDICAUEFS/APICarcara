const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const fs = require("fs");
const Processor = require('./Processor');

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/",(req,res)=>{

    fs.readFile("../dados/data.txt","utf-8", function(err,dados){
        if(err){
            console.log(err);
            res.status(404);
        }else{
            let ad = JSON.parse(dados);
            res.json(ad);
        }
    });

});

app.post("/",(req,res) => {
    let dado = req.body.dado;
    let json = Processor.Process(dado);
    fs.writeFile("../dados/data.txt", JSON.stringify(json), (error) =>{
        if(error){
            console.log(error);
        }else{
            console.log("dados foram escrito em arquivos .txt");
        }
    });
    res.sendStatus(200);
    
});

app.listen(3200,()=>{console.log("Api em execução!");});
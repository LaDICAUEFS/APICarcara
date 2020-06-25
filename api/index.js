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

            fs.readFile("../dados/data.txt","utf-8", function(err,dados){
            if(err){
                res.status(404);
                console.log(err)
            }
            else{

                res.sendStatus=200;
                let ad = JSON.stringify(dados);
                res.json(ad);
              }
            });
        /* let dados = fs.readFileSync("../dados/data.txt","utf-8" );

         console.log(dados);

         //console.log(contents +" teste");*/

        res.json({
            teste:"teste"                   // o json  com os os dados  para  teste
    });
    
});

app.post("/",(req,res) => {
    let dado = req.body.dado;

    fs.writeFile("../dados/data.txt", dado, (error) =>{
        if(error){
            console.log(error);
        }else{
            console.log("teste");
        }
    });
    res.sendStatus(200);
    
});
app.listen(3200,()=>{console.log("Api em execução!");});
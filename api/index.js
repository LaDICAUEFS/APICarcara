const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/",(req,res)=>{

    let ab = inputOutput.read() ;

    res.json({
                                    // o json  com os os dados 
    });
    res.statusCode(200);
});

app.post("/",(req, res) => {

    let ab = inputOutput.write() ;

});

app.put("/:id",(req,res)=>{

})

app.delete("/:id",(req,res)=>{

});

app.listen(3200,()=>{console.log("Api em execução!");});
const express = require("express");
const app = express();


app.get("/",(req,res)=>{
    res.json({
        teste:"teste"
    })
});

app.post("/",(req, res) => {
  
});
app.listen(3200,()=>{console.log("Api em execução!");});
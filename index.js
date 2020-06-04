const express = require("express");
const app = express();

app.set('view engine','ejs');
app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.listen(3200,()=>{console.log("Api em execução!");});
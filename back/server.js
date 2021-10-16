const express = require('express');
const app = express();
const funconarioRota = require("./routes/FruncionarioRoute");

app.use("/",funconarioRota);

app.listen(23569,function(){
    console.log("servidor rodadno na porta 23569");
});
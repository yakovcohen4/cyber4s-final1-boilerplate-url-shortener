const express = require('express');
const router = express.Router();
const shortid = require('shortid');
const fs = require('fs')
const path = require('path');

console.log(shortid.generate());

const baseUrl="http://localhost:3000/api"

router.post("/",(req,res)=>{
    const longUrl=`"${req.body.longUrl}"`;
    const iD='_' + Math.random().toString(36).substr(2, 9)
    const shortUrl=baseUrl +"/"+ iD;
    let urls=fs.readdirSync(`./backEnd/DB`)
    // res.send(urls)
    for (let url of urls){
        console.log(longUrl.toString())
        console.log(fs.readFileSync(`./backEnd/DB/${url}`).toString())
        console.log(longUrl===fs.readFileSync(`./backEnd/DB/${url}`).toString())
        if (longUrl===fs.readFileSync(`./backEnd/DB/${url}`).toString())
        res.send("yes")
    }
    const urlFolderPath = path.resolve(`./backEnd/DB`,  iD +".json");
        fs.writeFileSync(urlFolderPath, `${JSON.stringify(longUrl)}`); 

     res.send(shortUrl); 
})

router.get("/:id", (req, res) => { 
    res.status(301).header("Location", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301").end();
    res.send("res");
})

module.exports = router;
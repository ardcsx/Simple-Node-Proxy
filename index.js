const express = require('express');
const axios = require('axios');
const randomUseragent = require('random-useragent');
const app = express();

let getProxy = async (req, res) => {
    try {
        const response = await axios(req.query.url, { headers: { 'User-Agent': randomUseragent.getRandom() }  });
        res.send(response.data)
    } catch (e) {
        console.log(e);
        res.send({error: e})   
    }
};

app.use('/proxy', getProxy)
app.use("/", (req, res) => {
    res.json({ message: "Hellow World!" });
  });


let port = 15904
const PORT = process.env.PORT || port;
app.listen(PORT, err => {
    if(err) throw err;
    console.log("Express is working on port " + port);
});
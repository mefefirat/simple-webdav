
const express = require('express')
const app = express()
const port = 3000;
const webdav = require("./models/webdav");

app.get('/*', async (req, res) => {

    try {
        let list = await webdav.List(req.url);
        res.send(list);
    }
    catch (error) {
        if(error.response.status === 404)
        {
            let message = {status: 404, message: "Not Found"}
            res.status(404).send(message);
        }
        else
        {
            console.log(error.response.data);
            res.status(500).send("test");
        }
    }
});

//folder name regex
//^[^\s^\x00-\x1f\\?*:"";<>|\/.][^\x00-\x1f\\?*:"";<>|\/]*[^\s^\x00-\x1f\\?*:"";<>|\/.]+$
app.mkcol('/*', async (req, res) => {

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

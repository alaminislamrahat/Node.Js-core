const http = require("http");
const fs = require("fs");
const url = require('url')


const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}:${req.url}:New Request Recieved\n`;

    const myUrl = url.parse(req.url, true)
    console.log(myUrl)
    fs.appendFile('log.txt', log, (err, data) => {

        switch (myUrl.pathname) {
            case '/': res.end("home page")
                break;
            case '/about': 
            const username = myUrl.query.name;
            res.end(`hi ${username}`);
                break;
            default: res.end("404")

        }

    })
});

myServer.listen(8000, () => console.log('server started'))
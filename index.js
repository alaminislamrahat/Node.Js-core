const http = require("http");
const fs = require("fs");


const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}:${req.url}:New Request Recieved\n`;
    fs.appendFile('log.txt', log, (err, data) => {

        switch (req.url) {
            case '/': res.end("home page")
                break;
            case '/about': res.end("about al amin islam rahat");
                break;
            default: res.end("404")

        }

    })
});

myServer.listen(8000, () => console.log('server started'))
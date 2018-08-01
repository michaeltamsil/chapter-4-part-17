let http = require('http');
let fs = require('fs');
http.createServer( (requestAnimationFrame, res) => {
    fs.readFile('test.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html'})
        res.write(data)
        res.end()
    })
}).listen(8080)
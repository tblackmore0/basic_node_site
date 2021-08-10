const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        
            if (err) {
                throw err
            }

            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end();
            })
        
    }

    if (req.url === '/contact-me') {
        fs.readFile(path.join(__dirname, 'contact-me.html'), (err, data) => {
        
            if (err) {
                throw err
            }

            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end();
            })
            
    }

    if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'about.html'), (err, data) => {
        
            if (err) {
                throw err
            }
    
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end();
            })
            
    }

    else {
        fs.readFile(path.join(__dirname, '404.html'), (err, data) => {
        
            if (err) {
                throw err
            }
    
            res.writeHead(404, {'Content-Type': 'text/html'})
            res.write(data)
            res.end();
            })
            
    }
})

server.listen(8080, function() {
    console.log('Server is running')
})
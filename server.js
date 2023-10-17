const http = require('http')
const statusCode = require('http-status-codes')
const data = require('./data')
const fs = require('fs')
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application\lson' })
    res.write(JSON.stringify(data))
    res.end()

}).listen(4000)

console.log("first")

const input = process.argv
fs.writeFileSync(input[2],input[3])
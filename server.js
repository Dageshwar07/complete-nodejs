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
if (input[2] == 'add') {

    fs.writeFileSync(input[3], input[4])

}
else if (input[2] == 'remove') {
    fs.unlinkSync(input[3])

}
else {
    console.log("invalid output")
}
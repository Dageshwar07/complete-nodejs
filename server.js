const http = require('http')
const statusCode = require('http-status-codes')
const data = require('./data')
const fs = require('fs')
const path = require('path')
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application\lson' })
    res.write(JSON.stringify(data))
    res.end()

}).listen(4000)

console.log("first")

// const input = process.argv
// if (input[2] == 'add') {

//     fs.writeFileSync(input[3], input[4])

// }
// else if (input[2] == 'remove') {
//     fs.unlinkSync(input[3])

// }
// else {
//     console.log("invalid output")
// }

// const dirpath = path.join(__dirname, 'file')
// for (let index = 0; index < 5; index++) {

//     fs.writeFileSync(dirpath + "/hello" + index + ".text", "a simple text file" + " " + index)
// }
// console.log("==>", dirpath)


// crud operation with file
const dirpath = path.join(__dirname, 'crud')
const filepath = `${dirpath}/apple.text`
// create file

// fs.writeFileSync(filepath, 'this is a sample text file')

// read file

// fs.readFile(filepath,'utf-8', (err, item) => {
//     console.log(item)
// })

// append file text
// fs.appendFile(filepath, ' and file name is apple.text', (err) => {
//     if (!err) {
//         console.log("file is updated")
//     }
// })

// rename file
// fs.rename(filepath, `${dirpath}/apple.text`, (err) => {
//     if (!err) {
//         console.log("file is updated")
//     }

// })
// delete file

// fs.unlinkSync(`${dirpath}/fruit.text`)



// const http = require('http')
// const data = require('./data')
// const fs = require('fs')
// const path = require('path')
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'application\lson' })
//     res.write(JSON.stringify(data))
//     res.end()

// }).listen(4000)

// console.log("first")

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
// const dirpath = path.join(__dirname, 'crud')
// const filepath = `${dirpath}/apple.text`
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

// let a = 10
// let b = 20


// let wait = new Promise((res, rej) => {
//     setTimeout(() => {

//         res(20)
//     }, 1000);
// }).then((a) => {
//     console.log(a)
//     console.log(a + b)

// })


// express

const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()

const publicPath = path.join(__dirname, 'public')
// app.use(express.static(publicPath))

// app.get('/', (req, res) => {
//     res.send("hello this is front page page",`<a href="/index.html">goto home</a>`)
// })
// app.get('/about', (req, res) => {
//     res.send(`<input type="text" value="${req.query.name}"
//         placeholder="enter the name"/><a href="/user"/>user`)


// })
// app.get('/user', (req, res) => {
//     console.log("data send by browser", req.query.name
//     )
//     res.send("welcome " + req.query.name + ' in user page' + '<a href="/about" /> about')
// })

// file without extension
// app.get('/index', (req, res) => {
//     res.sendFile(`${publicPath}/index.html`)
// })
// app.get('/about', (req, res) => {
//     res.sendFile(`${publicPath}/about.html`)
// })
// app.get('*', (req, res) => {
//     res.sendFile(`${publicPath}/404.html`)
// })

// middleware
// application level

const reqFilter = (req, res, next) => {
    console.log("req filter")
    if (!req.query.age) {
        res.send("please provide age")
    }
    else if (req.query.age < 18) {
        res.send("you can not acces this page")
    }
    else {
        next();

    }
}

app.use(reqFilter)

app.get('/', (req, res) => {
    res.send("welcome to home page")
    console.log("welcome to home page")
})

app.get('/user', (req, res) => {
    res.send("welcome to user page")
    console.log("welcome to user page")
})

app.listen(4000)

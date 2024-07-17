const express = require("express")
const bodyParser = require("body-parser")
const fs = require("node:fs")
const app = express()
const port = 3000

app.use(bodyParser.text())

app.get('/', (req, res) => {
    res.send(fs.readFileSync('text.txt', 'utf8'))
})

app.post('/', (req, res) => {
    fs.writeFileSync('text.txt', req.body);
    res.send("Success")
})

app.listen(port, () => {
    console.log("Listening on port 3000")
})
const express = require("express")
// const path = require("path")
const app = express()

app.listen(3000, () => console.log("working"))

// app.use(express.static(path.resolve(__dirname, "client", )))

app.get('/', function (req, res) {
    res.send('s;fk')
})
const express = require('express')
const app = express()
const PORT = 3000

app.get('/', async(req, res) =>{
    res.send("Hello Felicia 25")
})

app.listen(PORT, () =>{
    console.log(`LISTEN TO PORT ${PORT}`)
})
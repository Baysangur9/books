const mongoose = require('mongoose')
const express = require('express')


const port = 5000

const app = express()

app.use(express.json())

const url = 'mongodb+srv://Baysangur:bechan999@cluster0.igeqhh5.mongodb.net/books'

app.post( '/', (req, res) => {
    console.log(req.body)
    res.status(200).json('Сервер Работает')
})

app.listen(port, () => console.log('Server started on port ' + port))
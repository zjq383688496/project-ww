'use strict'

const express = require('express')
const app     = express()
const http    = require('http')

app.disable('x-powered-by')
app.use(express.static(__dirname + '/src'))

app.use((req, res, next) => {
	res.status(404).send('404')
})
app.use((err, req, res, next) => {
	res.status(500).send('500')
})

app.listen(3000)

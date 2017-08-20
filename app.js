'use strict'

const express = require('express')
const app     = express()
const http    = require('http')

app.disable('x-powered-by')
app.use(express.static(__dirname + '/src'))

app.listen(3000)

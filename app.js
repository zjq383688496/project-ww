'use strict'

const express    = require('express')
const app        = express()
const bodyParser = require('body-parser')

app.disable('x-powered-by')

app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }))

app.use(express.static(__dirname + '/src', { maxAge: 18e5, etag: false }))

app.use((req, res, next) => {
	var _render = res.render,
		st = Date.now()
	res.render = function () {
		res.setHeader('x-expire-time', Date.now() - st + 'ms')
		return _render.apply(this, arguments)
	}
	next()
})

app.use('/api', require('./routes/api'))

app.use((req, res, next) => {
	res.status(404).send('404')
})
app.use((err, req, res, next) => {
	res.status(500).send('500')
})

app.listen(3000)

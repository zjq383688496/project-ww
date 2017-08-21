const express = require('express')
const router  = require('express').Router()
const request = require('request')

const http = {
	result: function(err, res, data, success, error) {
		if (!err) {
			console.log('===================== RESPONSE =====================')
			console.log(data)
			if (res.statusCode === 200) {
				typeof(success) === 'function' && success(data, res)
			} else {
				typeof(error) === 'function' && error(data, res)
			}
		} else {
			console.log('===================== ERROR =====================')
			console.log(err)
			typeof(error) === 'function' && error(err)
		}
	},
	get: function(url, success, error) {
		var me = this
		var uri = config.api + url
		var opts = {
			url: uri,
			json: true
		}
		console.log('===================== API =====================')
		console.log(uri)
		request.get(opts, function (err, res, data) {
			me.result(err, res, data, success, error)
		})
	},
	post: function(url, reqData, success, error) {
		var me = this
		var uri = config.api + url
		var opts = {
			url: uri,
			json: true,
			form: reqData
		}
		console.log('===================== API =====================')
		console.log(uri)
		console.log('===================== DATA =====================')
		console.log(reqData)
		request.post(opts, function (err, res, data) {
			me.result(err, res, data, success, error)
		})
	}
}

function format(query) {
	var arr = []
	for (var p in query) {
		arr.push(p + '=' + query[p])
	}
	return arr.join('&')
}

// 所有GET请求处理
router.get('*', function(req, res, next) {
	var query = req.query
	// http.headers = req.headers
	var url = req.originalUrl.split('?')[0] + '?' + format(query)

	http.get(url, function(data, rs) {
		res.status(rs.statusCode).send(data)
	}, function(err, rs) {
		if (rs) {
			res.status(rs.statusCode).send(err)
		} else {
			res.send(err)
		}
	})
})

// 所有POST请求处理
router.post('*', function(req, res, next) {

	var body = req.body,
		url = req.originalUrl
	// http.headers = req.headers
	http.post(url, body, function(data, rs) {
		if (/getUserInfo/.test(url)) {
			res.cookie('u', JSON.stringify(data.data), { maxAge: 86400000 * 7 })
		}
		res.status(rs.statusCode).send(data)
	}, function(err, rs) {
		if (rs) {
			res.status(rs.statusCode).send(err)
		} else {
			res.send(err)
		}
	})
})

module.exports = router

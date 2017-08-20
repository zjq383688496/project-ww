var Channel = function() {
		"use strict";
		function e(e, n, t, i) {
			function s(n) {
				for (var t = 0; t < n.length; t++) if (n[t].win === e) return !0;
				return !1
			}
			var r = !1;
			if ("*" === n) {
				for (var a in o) if (o.hasOwnProperty(a) && "*" !== a && "object" == typeof o[a][t] && (r = s(o[a][t]))) break
			} else o["*"] && o["*"][t] && (r = s(o["*"][t])), !r && o[n] && o[n][t] && (r = s(o[n][t]));
			if (r) throw "A channel is already bound to the same window which overlaps with origin '" + n + "' and has scope '" + t + "'";
			"object" != typeof o[n] && (o[n] = {}), "object" != typeof o[n][t] && (o[n][t] = []), o[n][t].push({
				win: e,
				handler: i
			})
		}
		function n(e, n, t) {
			for (var i = o[n][t], s = 0; s < i.length; s++) i[s].win === e && i.splice(s, 1);
			0 === o[n][t].length && delete o[n][t]
		}
		function t(e) {
			return Array.isArray ? Array.isArray(e) : e.constructor.toString().indexOf("Array") != -1
		}
		var i = Math.floor(1000001 * Math.random()),
			o = {},
			s = {},
			r = function(e) {
				try {
					var n = JSON.parse(e.data);
					if ("object" != typeof n || null === n) throw "malformed"
				} catch (e) {
					return
				}
				var t, i, r, a = e.source,
					c = e.origin;
				if ("string" == typeof n.method) {
					var l = n.method.split("::");
					2 == l.length ? (t = l[0], r = l[1]) : r = n.method
				}
				if ("undefined" != typeof n.id && (i = n.id), "string" == typeof r) {
					var h = !1;
					if (o[c] && o[c][t]) for (var d = 0; d < o[c][t].length; d++) if (o[c][t][d].win === a) {
						o[c][t][d].handler(c, r, n), h = !0;
						break
					}
					if (!h && o["*"] && o["*"][t]) for (var d = 0; d < o["*"][t].length; d++) if (o["*"][t][d].win === a) {
						o["*"][t][d].handler(c, r, n);
						break
					}
				} else "undefined" != typeof i && s[i] && s[i](c, r, n)
			};
		return window.addEventListener ? window.addEventListener("message", r, !1) : window.attachEvent && window.attachEvent("onmessage", r), {
			build: function(o) {
				var r = function(e) {
						if (o.debugOutput && window.console && window.console.log) {
							try {
								"string" != typeof e && (e = JSON.stringify(e))
							} catch (n) {}
							console.log("[" + l + "] " + e)
						}
					};
				if (!window.postMessage) throw "jschannel cannot run this browser, no postMessage";
				if (!window.JSON || !window.JSON.stringify || !window.JSON.parse) throw "jschannel cannot run this browser, no JSON parsing/serialization";
				if ("object" != typeof o) throw "Channel build invoked without a proper object argument";
				if (!o.window || !o.window.postMessage) throw "Channel.build() called without a valid window argument";
				if (window === o.window) throw "target window is same as present window -- not allowed";
				var a = !1;
				if ("string" == typeof o.origin) {
					var c;
					"*" === o.origin ? a = !0 : null !== (c = o.origin.match(/^https?:\/\/(?:[-a-zA-Z0-9_\.])+(?::\d+)?/)) && (o.origin = c[0].toLowerCase(), a = !0)
				}
				if (!a) throw "Channel.build() called with an invalid origin";
				if ("undefined" != typeof o.scope) {
					if ("string" != typeof o.scope) throw "scope, when specified, must be a string";
					if (o.scope.split("::").length > 1) throw "scope may not contain double colons: '::'"
				}
				var l = function() {
						for (var e = "", n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", t = 0; t < 5; t++) e += n.charAt(Math.floor(Math.random() * n.length));
						return e
					}(),
					h = {},
					d = {},
					f = {},
					u = !1,
					g = [],
					p = function(e, n, t) {
						var i = !1,
							o = !1;
						return {
							origin: n,
							invoke: function(n, i) {
								if (!f[e]) throw "attempting to invoke a callback of a nonexistent transaction: " + e;
								for (var o = !1, s = 0; s < t.length; s++) if (n === t[s]) {
									o = !0;
									break
								}
								if (!o) throw "request supports no such callback '" + n + "'";
								b({
									id: e,
									callback: n,
									params: i
								})
							},
							error: function(n, t) {
								if (o = !0, !f[e]) throw "error called for nonexistent message: " + e;
								delete f[e], b({
									id: e,
									error: n,
									message: t
								})
							},
							complete: function(n) {
								if (o = !0, !f[e]) throw "complete called for nonexistent message: " + e;
								delete f[e], b({
									id: e,
									result: n
								})
							},
							delayReturn: function(e) {
								return "boolean" == typeof e && (i = e === !0), i
							},
							completed: function() {
								return o
							}
						}
					},
					m = function(e, n, t) {
						return window.setTimeout(function() {
							if (d[e]) {
								var i = "timeout (" + n + "ms) exceeded on method '" + t + "'";
								(0, d[e].error)("timeout_error", i), delete d[e], delete s[e]
							}
						}, n)
					},
					w = function(e, n, i) {
						if ("function" == typeof o.gotMessageObserver) try {
							o.gotMessageObserver(e, i)
						} catch (a) {
							r("gotMessageObserver() raised an exception: " + a.toString())
						}
						if (i.id && n) {
							if (h[n]) {
								var c = p(i.id, e, i.callbacks ? i.callbacks : []);
								f[i.id] = {};
								try {
									if (i.callbacks && t(i.callbacks) && i.callbacks.length > 0) for (var l = 0; l < i.callbacks.length; l++) {
										for (var u = i.callbacks[l], g = i.params, m = u.split("/"), w = 0; w < m.length - 1; w++) {
											var y = m[w];
											"object" != typeof g[y] && (g[y] = {}), g = g[y]
										}
										g[m[m.length - 1]] = function() {
											var e = u;
											return function(n) {
												return c.invoke(e, n)
											}
										}()
									}
									var b = h[n](c, i.params);
									c.delayReturn() || c.completed() || c.complete(b)
								} catch (a) {
									var v = "runtime_error",
										_ = null;
									if ("string" == typeof a ? _ = a : "object" == typeof a && (a && t(a) && 2 == a.length ? (v = a[0], _ = a[1]) : "string" == typeof a.error && (v = a.error, a.message ? "string" == typeof a.message ? _ = a.message : a = a.message : _ = "")), null === _) try {
										_ = JSON.stringify(a), "undefined" == typeof _ && (_ = a.toString())
									} catch (S) {
										_ = a.toString()
									}
									c.error(v, _)
								}
							}
						} else i.id && i.callback ? d[i.id] && d[i.id].callbacks && d[i.id].callbacks[i.callback] ? d[i.id].callbacks[i.callback](i.params) : r("ignoring invalid callback, id:" + i.id + " (" + i.callback + ")") : i.id ? d[i.id] ? (i.error ? (0, d[i.id].error)(i.error, i.message) : void 0 !== i.result ? (0, d[i.id].success)(i.result) : (0, d[i.id].success)(), delete d[i.id], delete s[i.id]) : r("ignoring invalid response: " + i.id) : n && h[n] && h[n]({
							origin: e
						}, i.params)
					};
				e(o.window, o.origin, "string" == typeof o.scope ? o.scope : "", w);
				var y = function(e) {
						return "string" == typeof o.scope && o.scope.length && (e = [o.scope, e].join("::")), e
					},
					b = function(e, n) {
						if (!e) throw "postMessage called with null message";
						var t = u ? "post  " : "queue ";
						if (r(t + " message: " + JSON.stringify(e)), n || u) {
							if ("function" == typeof o.postMessageObserver) try {
								o.postMessageObserver(o.origin, e)
							} catch (i) {
								r("postMessageObserver() raised an exception: " + i.toString())
							}
							o.window.postMessage(JSON.stringify(e), o.origin)
						} else g.push(e)
					},
					v = function(e, n) {
						if (r("ready msg received"), u) throw "received ready message while in ready state.  help!";
						for (l += "ping" === n ? "-R" : "-L", _.unbind("__ready"), u = !0, r("ready msg accepted."), "ping" === n && _.notify({
							method: "__ready",
							params: "pong"
						}); g.length;) b(g.pop());
						"function" == typeof o.onReady && o.onReady(_)
					},
					_ = {
						unbind: function(e) {
							if (h[e]) {
								if (!delete h[e]) throw "can't delete method: " + e;
								return !0
							}
							return !1
						},
						bind: function(e, n) {
							if (!e || "string" != typeof e) throw "'method' argument to bind must be string";
							if (!n || "function" != typeof n) throw "callback missing from bind params";
							if (h[e]) throw "method '" + e + "' is already bound!";
							return h[e] = n, this
						},
						call: function(e) {
							if (!e) throw "missing arguments to call function";
							if (!e.method || "string" != typeof e.method) throw "'method' argument to call must be string";
							if (!e.success || "function" != typeof e.success) throw "'success' callback missing from call";
							var n = {},
								t = [],
								o = [],
								r = function(e, i) {
									if (o.indexOf(i) >= 0) throw "params cannot be a recursive data structure";
									if (o.push(i), "object" == typeof i) for (var s in i) if (i.hasOwnProperty(s)) {
										var a = e + (e.length ? "/" : "") + s;
										"function" == typeof i[s] ? (n[a] = i[s], t.push(a), delete i[s]) : "object" == typeof i[s] && r(a, i[s])
									}
								};
							r("", e.params);
							var a = {
								id: i,
								method: y(e.method),
								params: e.params
							};
							t.length && (a.callbacks = t), e.timeout && m(i, e.timeout, y(e.method)), d[i] = {
								callbacks: n,
								error: e.error,
								success: e.success
							}, s[i] = w, i++, b(a)
						},
						notify: function(e) {
							if (!e) throw "missing arguments to notify function";
							if (!e.method || "string" != typeof e.method) throw "'method' argument to notify must be string";
							b({
								method: y(e.method),
								params: e.params
							})
						},
						destroy: function() {
							n(o.window, o.origin, "string" == typeof o.scope ? o.scope : ""), window.removeEventListener ? window.removeEventListener("message", w, !1) : window.detachEvent && window.detachEvent("onmessage", w), u = !1, h = {}, f = {}, d = {}, o.origin = null, g = [], r("channel destroyed"), l = ""
						}
					};
				return _.bind("__ready", v), setTimeout(function() {
					b({
						method: y("__ready"),
						params: "ping"
					}, !0)
				}, 0), _
			}
		}
}();

window.JSG_AGENT = {
	_log: function(e) {
		console.log(e)
	},
	_initCallbacks: function(e) {
		e.share && e.share.friend && e.share.timeline && (console.log("设置分享回调"), 
		this._chan.unbind("timelineShareSuccess"), 
		this._chan.unbind("timelineShareCancel"), 
		this._chan.unbind("friendShareSuccess"), 
		this._chan.unbind("friendShareCancel"), 
		this._chan.bind("timelineShareSuccess", e.share.timeline.success || function() {}), 
		this._chan.bind("timelineShareCancel", e.share.timeline.cancel || function() {}), 
		this._chan.bind("friendShareSuccess", e.share.friend.success || function() {}), 
		this._chan.bind("friendShareCancel", e.share.friend.cancel || function() {})), 
		e.pay && (this._chan.unbind("paySuccess"), 
		this._chan.unbind("payCancel"), 
		this._chan.bind("paySuccess", e.pay.success || function() {}), 
		this._chan.bind("payCancel", e.pay.cancel || function() {})), 
		this.onGetShareUrlSuccess = e.getShareUrl ? e.getShareUrl.success : this._log, 
		this.onIsShowTimelineSuccess = e.isShowTimeline ? e.isShowTimeline.success : this._log, 
		this.onIsSafeSuccess = e.isSafe ? e.isSafe.success : this._log
	},
	init: function() {
		this._chan = Channel.build({
			window: window.parent,
			origin: "*",
			scope: "jsgScope"
		})
	},
	// config: function(e) {
	// 	this._initCallbacks(e), this._chan.call({
	// 		method: "config",
	// 		params: e,
	// 		success: this._log,
	// 		error: this._log
	// 	})
	// },
	refresh: function(e) {
		this._chan.call({
			method: "refresh",
			params: e,
			success: this._log,
			error: this._log
		})
	},
	pay: function(e) {
		this._chan.call({
			method: "pay",
			params: e,
			success: this._log,
			error: this._log
		})
	},
	showQRCode: function(e) {
		this._chan.call({
			method: "showQRCode",
			params: e,
			success: this._log,
			error: this._log
		})
	},
	// auth: function() {
	// 	this._chan.call({
	// 		method: "auth",
	// 		success: this._log,
	// 		error: this._log
	// 	})
	// },
	// showImg: function(e) {
	// 	this._chan.call({
	// 		method: "showImg",
	// 		params: e,
	// 		success: this._log,
	// 		error: this._log
	// 	})
	// },
	// getShareUrl: function() {
	// 	this._chan.call({
	// 		method: "getShareUrl",
	// 		success: this.onGetShareUrlSuccess,
	// 		error: this._log
	// 	})
	// },
	// isShowTimeline: function() {
	// 	this._chan.call({
	// 		method: "isShowTimeline",
	// 		success: this.onIsShowTimelineSuccess,
	// 		error: this._log
	// 	})
	// },
	isSafe: function() {
		this._chan.call({
			method: "isSafe",
			success: this.onIsSafeSuccess,
			error: this._log
		})
	}
};

window.JSG_AGENT.init();

var openid    = null;
var payOpenId = null;
var name      = null;
var sex       = null;
var avatar_url = null;
var m         = null; //跳转

function setWxUerInfo(openid,payOpenId,name,sex,avatar_url, m){
	this.openid     = openid;
	this.payOpenId  = payOpenId;
	this.name       = name;
	this.sex        = sex;
	this.avatar_url = avatar_url;
	this.m          = m;
}

function getM(){
	return this.m;
}

function clearM(){
	this.m = null;
}

function getWxUserInfo(){
	var wxUserinfo = new Object();
	wxUserinfo.openid     = this.openid;
	wxUserinfo.payOpenId  = this.payOpenId;
	wxUserinfo.name 	  = this.name;
	wxUserinfo.sex 	      = this.sex;
	wxUserinfo.avatar_url = this.avatar_url;
	return wxUserinfo;
}

function gopay(orderInfo){
	window.JSG_AGENT.pay(orderInfo);
}

function showQRCodeImg(qrCodeInfo){
	window.JSG_AGENT.showQRCode(qrCodeInfo);
}


(function(window) {

if (window.API && window.CONFIG) return

window.API = {
	login:    'open/login.html',		// 登录
	reg:      'open/register.html', 	// 注册
	balance:  'open/balance.html',		// 余额
	prorate:  'open/prorate.html',		// 资产赔率
	room:     'open/get.html',
	getUsers: 'open/getUsers.html',
	todayProfit:          'open/todayProfit.html',
	getLatestRoundDetail: 'open/getLatestRoundDetail.html'
}

window.CONFIG = {

}

}(window))
# 说明文档


### 参考地址
http://eg.qqqdui.com/index.html

### 测试API
13723  登录接口

13185251037  密码 1234567

## API

### RESPONSE
- type: 状态
+ // 1: 成功
+ // 其他: 错误
- data: 数据/信息


1 登录
+ http://wrc.szhskk.com/index/login/login.html
+ POST
+ DATA:  { username: 13800000000, upwd: 111111 }
+ RESPONSE：{ "data":"登录成功!", "type":1 }

2 注册
+ http://wrc.szhskk.com/index/login/register.html
+ POST
+ DATA:  { 
	username:13800000001,
	phonecode:111111,
	upwd:111111,
	upwd2:111111,
	oid:1031 //推荐码
 }
+ RESPONSE：{"data":"注册成功，已自动登录!","type":1}



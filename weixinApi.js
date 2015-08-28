var _ = require('lodash');
var https = require('https');

function WeixinApi(appid, secret){
	this.config = {
		appid: appid,
		secret: secret
	}
}

WeixinApi.prototype.getAccessToken = function(code, callback){
	var apiUrl = 'https://api.weixin.qq.com/sns/oauth2/access_token?' 
				+ 'appid=' + this.config.appid 
				+ '&secret=' + this.config.secret 
				+ '&code=' + code 
				+ '&grant_type=authorization_code';

	https.get(apiUrl, function (res) {
		if (res.statusCode != 200) {
			callback('fail', null);
		} else {
			res.on('data', function (data) {
				var result = JSON.parse(data.toString());
				callback(result.errcode ? result.errcode : null, result);
			})
		}
	})
}

WeixinApi.prototype.getUserInfo = function(info, callback){
	var apiUrl = 'https://api.weixin.qq.com/sns/userinfo?'
				+ 'access_token=' + info.access_token 
				+ '&openid=' + info.openid
				+ '&lang=zh_CN';

	https.get(apiUrl, function (res) {
		if (res.statusCode != 200) {
			callback('fail', null);
		} else {
			res.on('data', function (data) {
				var result = JSON.parse(data.toString());
				callback(result.errcode ? result.errcode : null, result);
			});
		}
	});
}

module.exports = WeixinApi;
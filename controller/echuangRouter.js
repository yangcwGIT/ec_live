var express = require('express');
var echuangRouter = express.Router();
var weixinApi = require('../weixinApi.js');

var weixinUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4b5193ade0b6c375&redirect_uri=http%3A%2F%2Fwww.vgame.tv%2Fechuang%2Fcallback&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect';

echuangRouter.get('/callback', function (req, res) {
	if (req.query.code && req.query.state == 'STATE') {
		weixinApi.getAccessToken(req.query.code, function(err, result){
			console.log(err);
			console.log(result);
			res.end('callback');
		})
	} else {
		res.redirect(weixinUrl);
	}
})

echuangRouter.get('/main', function (req, res) {
	res.end('main');
})

module.exports = echuangRouter;
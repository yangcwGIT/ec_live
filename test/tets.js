var mocha = require('mocha');
var WeixinApi = require('./callback.js');

describe("WeixinApi", function(){
	// describe("#getAccesToken", function(){
	// 	it("ok", function(done){
	// 		wxApi = new WeixinApi('wx4b5193ade0b6c375', 'df632ac8f4e28c9c170113457d0a17ac');
	// 		wxApi.getAccesToken(5, function(err, result){
	// 			console.log(err);
	// 			done();
	// 		});
	// 	})
	// })

	describe("#getUserInfo", function(){
		it("ok", function(done){
			wxApi = new WeixinApi('wx4b5193ade0b6c375', 'df632ac8f4e28c9c170113457d0a17ac');
			wxApi.getUserInfo({}, function(err, result){
				console.log(err);
				done();
			})			
		})
	})
})
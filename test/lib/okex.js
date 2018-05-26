/* eslint-env mocha */
'use strict'

const assert = require('assert')
const Okex = require('../../lib/okex')

var defaultHanlder = (msg) => {
	console.log(msg);
};

describe('okex api', () => {
	var api = new Okex({
		apiKey: 'dummy',
		secretKey: 'dummy'
	});

	it('sign', () => {
		var data = {x: 1, y: 2, nonce: (new Date()).getTime()};
		api._sign(data);
		//assert.notnull('data.sign', data.sign);
		//console.log(data.sign)
		
	});

	it('onFutureTicker', () => {
		api.onFutureTicker('btc_usd', 'quarter', defaultHanlder);
		//console.log(api.subscribeChannels);
		assert.equal(api.subscribeChannels.length, 1);
		assert.equal('ok_sub_futureusd_btc_usd_ticker_quarter', api.subscribeChannels[0], 'future ticker topic');
	});

	it('onFutureTrade', () => {
		api.onFutureTrade('btc_usd', 'quarter', defaultHanlder);
		//console.log(api.subscribeChannels);
		assert.equal(api.subscribeChannels.length, 2);
		assert.equal('ok_sub_futureusd_btc_usd_trade_quarter', api.subscribeChannels[1], 'future ticker topic');
	});


	it('onFutureKline', () => {
		api.onFutureKline('btc_usd', 'quarter', '1m', defaultHanlder);
		//console.log(api.subscribeChannels);
		assert.equal(api.subscribeChannels.length, 3);
		assert.equal('ok_sub_futureusd_btc_usd_kline_quarter_1m', api.subscribeChannels[2], 'future ticker topic');
	});

})

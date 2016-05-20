'use strict';

var should = require('should');

module.exports = function () {
	var res = '';
	this.World();

	this.Given(/^I'm in blank page on browser$/, () => {
	});

	this.When(/^I move to index page$/, (done) => {
		this.request()
			.get('/')
			.expect(200)
			.end((err, result) => {
				should.not.exist(err);
				res = result;
				done();
			});
	});

	this.Then(/^I should see the "([^"]*)"$/, (msg) => {
		res.text.should.equal(msg);
	});
};
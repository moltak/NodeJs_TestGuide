'use strict';

var request = require('supertest');
var should = require('should');

var app = require('../index.js');

describe('Acceptance test', function () {
	it("should print 'Hello World'", function (done) {
		request(app)
			.get('/')
			.set('Content-Type', 'application/json')
			.expect(200)
			.end(function (err, result) {
				should.exist(err);
				result.text.should.equal('Hello code states');
				done();
			});
	});
});
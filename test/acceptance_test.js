'use strict';

let request = require('supertest');
let should = require('should');

let app = require('../index.js');

describe('BDD style test', () => {
	it("should print 'Hello World'", done => {
		request(app)
			.get('/')
			.set('Content-Type', 'application/json')
			.expect(200)
			.end((err, result) => {
				should.not.exist(err);
				result.text.should.equal('Hello World!');
				done();
			});
	});
});
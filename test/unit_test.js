'use strict';

var calculator = require('../lib/calculator');
var assert = require('chai').assert;

suite('TDD style test', function () {
	test('Calculator test', function () {
		var Calc = new calculator();
		assert.equal(Calc.sum(1, 2), 3);
	});
});
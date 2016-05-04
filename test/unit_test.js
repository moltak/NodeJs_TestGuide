'use strict';

let calculator = require('../lib/calculator');

let assert = require('chai').assert;

suite('TDD style test', () => {
	test('Calculator test', () => {
		let Calc = new calculator();
		assert.equal(Calc.sum(1, 2), 3);
	});
});
'use strict';

function CalculatorClass() {

}

CalculatorClass.prototype.sum = (a, b) => {
	return a + b;
};

module.exports = CalculatorClass;
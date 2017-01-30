'use strict';

// eslint-disable-next-line no-unused-vars
function memoize (passedFunc) {
	var cache = {};
	
	return function (x) {
		if (x in cache) {			
			return cache[x];
		} else {
			return cache[x] = passedFunc(x);
		}

	};
}
// eslint-disable-next-line no-unused-vars
function fibonacci(n) {
	if (n === 0 || n === 1)
		return n;
	else
		return fibonacci(n - 1) + fibonacci(n - 2);
}
'use strict';

function Stack() {
	this.arr = [];
	this.pop = function () {
		return this.arr.pop();
	}
	this.push = function (item) {
		this.arr.push(item);
	}
}
var stack = new Stack();
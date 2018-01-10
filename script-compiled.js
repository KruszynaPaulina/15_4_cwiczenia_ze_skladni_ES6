"use strict";

// Exercise 1

console.log("Exercise 1");

var hello = "Hello",
    world = "World!",
    effect = hello + " " + world;

console.log(effect);

// Exercise 2
console.log("Exercise 2");

var multiply = function multiply(a) {
	var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	return a * b;
};
console.log(multiply(2, 5));
console.log(multiply(6, 6));
console.log(multiply(5));

// Exercise 3
console.log("Exercise 3");

var average = function average() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var suma = 0;
	args.forEach(function (arg) {
		suma += arg;
	});
	return suma / args.length;
};

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

// Exercise 4
console.log("Exercise 4");

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));

// Exercise 4
console.log("Exercise 5");

var array = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = array[2],
    lastName = array[4];

console.log(firstName);
console.log(lastName);

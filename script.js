// Exercise 1

console.log("Exercise 1");

const hello = "Hello",
world = "World!",
effect = `${hello} ${world}`;

console.log(effect);

// Exercise 2
console.log("Exercise 2");

const multiply = (a, b = 1) => a * b;
console.log(multiply(2, 5));
console.log(multiply(6, 6));
console.log(multiply(5));

// Exercise 3
console.log("Exercise 3");

const average = (...args) => { 
	let suma = 0; 
	args.forEach(arg => {
		suma += arg;
	});
	return (suma/args.length);
};

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

// Exercise 4
console.log("Exercise 4");

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

// Exercise 4
console.log("Exercise 5");

const array = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstName, , lastName] = array;
console.log(firstName);
console.log(lastName);


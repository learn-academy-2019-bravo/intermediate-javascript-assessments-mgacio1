// Intermediate Javascript Assessments
// 1. Write an arrow function that takes one argument of type array and returns the contents of that array in reverse order.

// var originalArray = [1, 2, 3, 4, 5, 6, 7]
//
// var reverseArray =  originalArray.reverse()
// console.log(reverseArray);

// 2. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
// console.log(bicycle.type)
//
// // Log the bell:
// console.log(bicycle.gear[2])
//
// // Log the PSI:
// console.log(bicycle.wheels.specs[2])


// 3. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

// var ourString = "Hello Learn Students!"
//
// function letterCounter (string) {
// 	const newStr = ourString.toLowerCase()
// 	const arr1 = newStr.split("")
// 	var count = 0
//
// 	for (let i=0; i<arr1.length; i++){
// 		if(arr1[i] == 'l'){
// 		count++;
// 		}
// 	}
// 	return count;
// }
// console.log(letterCounter(ourString));

// 4. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// function getFib (arr) {
// 	for (let i=0; i<arr.length; i++){
// 		return arr[1]
// 	}
// }
// var getFib = [0, 1], max = 60, i = 1, next;
// do {
//   i++;
//   next = getFib[i-2] + getFib[i-1];
//   if (next <= max) {
//       console.log(next);
//       getFib[i] = next;
//   }
// } while(next < max);
//5. Write a function called oddChecker that takes in the fullArr and uses a for loop to return a new array of only odd numbers. Copy and paste your code and refactor using ES6 syntax.

var fullArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

// function oddChecker (array){
// 	var oddArr = []
// 	for (let i=0; i < array.length; i++){
// 		if (Number.isInteger(array[i])){
// 			if (array[i] % 2 != 0){
// 				oddArr.push(array[i])
// 			}
// 		}
// 	}
// 	return oddArr
// }
// console.log(oddChecker(fullArr));
var oddChecker = (array) => {
// function oddChecker (array){
	var oddArr = []
	for (let i=0; i < array.length; i++){
		if (Number.isInteger(array[i])){
			if (array[i] % 2 != 0){
				oddArr.push(array[i])
			}
		}
	}
	return oddArr
}
console.log(oddChecker(fullArr));

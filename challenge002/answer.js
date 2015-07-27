/****************
INSTRUCTIONS:

Create a function, add_arrays(), that does the following:

#### Input: 2 arrays of equal size 
- first_array, an array of numbers
- needle array, an array of numbers

#### Output: 
- output array, which has all values from the first array added to the values from the second array

#### Example:
var first_array = [3,-5,15,4];
var second_array = [3,18,-5,-4]


output = add_arrays(first_array,second_array);
console.log(output); //outputs [6,13,10,0];

#### Put your solution in answer.js
*********************/

var first_array = [3,-5,15,4];
var second_array = [3,18,-5,-4];
var output_array = [];

function add_arrays() {

	for(var i = 0; i < 4; i++) {
		output_array.push(first_array[i]);
		output_array.push(second_array[i]);
	}
	console.log(output_array);
}

add_arrays();


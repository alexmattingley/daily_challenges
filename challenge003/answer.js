// Arrays which will be added

var array1 = [ [1,2,3], [3,4,5], [6,7,8] ]
var array2 = [ [1,2,3], [1,2,3], [1,2,3] ]
var output = [[], [], []];


function matrix_add(array_1, array_2) {

	for(var i = 0; i <= 2; i++) {
		// console.log(array1[i]);
		// console.log(array2[i]);
		for(var x = 0; x <= 2; x++) {
			output[i][x] = array_1[i][x] + array_2[i][x];
		}
	}

	//output = array1[0][2] + array2[0][2];
	console.log(output);
}
matrix_add(array1, array2);
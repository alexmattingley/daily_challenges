$(document).ready(function() {
        //DAILY CHALLENGE 1
        var haystack = ['red', 'chair', 'pink', 'table', 'gray', 'green', 'tan'];
        var needle = ['fridge', 'chair', 'desk', 'table', 'couch'];
        var output = null;

        function search_array(array1, array2) {
            var temp_array = [];
            for (var i = 0; i < array1.length; i++) {
                for (var j = 0; j < array2.length; j++) {
                    if (array1[i] == array2[j]) {
                        temp_array.push(array1[i]);
                        console.log('temp_array:' + temp_array);
                    }
                }
            }
            return temp_array;
        }
        output = search_array(haystack, needle)
        search_array(haystack, needle);
        alert('challenge 1: sweet!');

        console.log("This is the items that match in the 2 array " + output); //outputs


        //DAILY CHALLENGE 2 - output array, which has all values from the first array //added to the values from the second array
        var array_1 = [3, -5, 15, 4];
        var array_2 = [3, 18, -5, -4];

        function add_arrays() {
            for (i = 0; i < array.length; i++) {
                array_2.push(array_1[i]);
                console.log(add_arrays(array_1, array2));
                alert('challenge 2');
            }
        }

        //DAILY CHALLENGE 3 - output: a multi-dimensional array
        function matrix_add() {
            var array1 = [
                [1, 2, 3],
                [3, 4, 5],
                [6, 7, 8]
            ];
            var array2 = [
                [1, 2, 3],
                [1, 2, 3],
                [1, 2, 3]
            ];
            for (var i = 0; i < array1.length; i++) {
                for (var j = 0; k < array2.length; j++) {
                    if (array1[i] == array2[j]) {
                        output = matrix_add(array1,array2)
                        console.log(output);
                        alert('challenge 3');
                    }
                }
            }
        }

        //DAILY CHALLENGE 4 - output array, an array of all #'s that are a factor of factor_number
        function find_factors(){
        var factor_number = 7;

        output = find_factors(factor_number);
        console.log(output);

    //IP
}

    }); //don't touch!
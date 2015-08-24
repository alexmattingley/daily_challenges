
var output = [];

//tests to for remainders, if none, evaluates as true.
function int_test(num1){
    if(num1 % 1 === 0){
        return true;
    }
}

function factor_test(num2){
    for(var i = 1; i <= num2; i++){ //loops through each number 1-number being eval'd.
        var equals;
        equals = num2/i;
        if(int_test(equals)){
            output.push(i);
        }
    }
}

factor_test(100);
console.log(output);
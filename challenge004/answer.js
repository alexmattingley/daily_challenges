
var output = [];

function int_test(num1){
    num1 % 1 === 0;
}

var equals; //need a better var name

function factor_test(num2){
    for(var i = 1; i <= num2; i++){
        equals = num2/i;
        if(int_test(equals)){
            output.push(equals);
        }
    }
}

factor_test(12);
console.log(output);
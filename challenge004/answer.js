
var output = [];

function int_test(num1){
    num1 % 1 === 0;
}

//int_test(10.5);

var equals; //need a better var name

function factor_test(num2){
    for(var i = 1; i <= num2; i++){
        equals = num2/i;
        console.log(equals);
        if(int_test(equals)){
            output.push(equals);
        }
    }
}

factor_test(10);
console.log(output);
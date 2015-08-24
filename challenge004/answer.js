
var output = [];

function int_test(num1){
    num1 % 1 === 0;
}

//int_test(10.5);



function factor_test(num1){
    for(var i = 1; i <= num1; i++){
        var equals; //need a better var name
        equals = num1/i;
        if(int_test(equals)){
            output.push(equals);
        }
    }
}

factor_test(10);
console.log(output);
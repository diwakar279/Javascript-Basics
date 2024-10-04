let a;
let b;

function calculator(a, b, callback){
const result =callback(a,b);
console.log(result);
}

function addition(a,b){
    return a+b;
}

function subtraction(a,b){
    return a-b;
}

function multiplication(a,b){
    return a*b;
}

calculator(2,3,multiplication)
calculator(2,3,subtraction)
calculator(2,3,addition)
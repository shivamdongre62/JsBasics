function Factorial(num){
    if(num < 0){
        throw new Error("Input Must be Greater than 0");
    }
    let result = 1;
    for(let i=1; i<=num; i++){
        result = result *  i;
    }
    console.log(result);
}

function FactorialUsingRecursion(num){
    
}


Factorial(4);
Factorial(0);


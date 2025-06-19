function ReverseString(inputString){

    if(typeof inputString != 'string'){
        throw new Error("Only Strings are Allowed");
    }

    const last = inputString.length - 1;
    let result = "";
    for(let i = last ; i >=0 ; i-- ){
        result += inputString[i];
        console.log(result);
    }
    console.log("Final Reversed String is",result);
}

ReverseString("Shivam");

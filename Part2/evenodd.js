// function EvenOddFinder(num){
//     const x = num % 2;
//     if(x != 0){
//         console.log("Num is Odd");
//     }
//     else{
//   console.log("Num is Even");
//     }
// }

function EvenOddFinder(num){
    const x = num % 2 ===0 ? "Even" : "Odd";
    console.log(x);
}


EvenOddFinder(0);
EvenOddFinder(14);
EvenOddFinder(17);

